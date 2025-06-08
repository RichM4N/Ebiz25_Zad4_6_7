package main

import (
	"fmt"
	"net/http"
	"strconv"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"github.com/labstack/echo/v4"
)

var db *gorm.DB
var err error

type Product struct {
	gorm.Model
	Name  string `json:"Name"`
	Price string `json:"Price"`
}

type ProductOrder struct {
	gorm.Model
	Name     string `json:"Name"`
	Price    string `json:"Price"`
	Quantity int    `json:"Quantity"`
}

type OrderStatus struct {
	Success bool `json:"Success"`
}

var ProductList = []Product{
	Product{Name: "samsung", Price: "1000"},
	Product{Name: "iphone", Price: "2000"},
}

func createProduct(c echo.Context) error {

	name_ := c.QueryParam("Name")
	price_ := c.QueryParam("Price")

	newProduct := Product{Name: name_, Price: price_}
	db.Create(&newProduct)

	return c.String(http.StatusOK, "")
}

func deleteProduct(c echo.Context) error {

	id_, _ := strconv.Atoi(c.QueryParam("id"))
	var product Product
	db.First(&product, id_)
	db.Delete(&product)

	return c.String(http.StatusOK, "")
}

func updateProduct(c echo.Context) error {

	id_, _ := strconv.Atoi(c.QueryParam("id"))

	name_ := c.QueryParam("Name")
	price_ := c.QueryParam("Price")

	var product Product
	db.First(&product, id_)
	db.Model(&product).Updates(Product{Name: name_, Price: price_})

	return c.String(http.StatusOK, "")
}

func getProducts(c echo.Context) error {

	var products []Product
	db.Find(&products)

	return c.JSON(http.StatusOK, products)
}

func getProduct(c echo.Context) error {

	id_, _ := strconv.Atoi(c.QueryParam("id"))

	var product Product
	db.First(&product, id_)

	return c.JSON(http.StatusOK, product)
}

func initDB() {

	db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&Product{})

	db.Session(&gorm.Session{AllowGlobalUpdate: true}).Delete(&Product{})

	for _, prod := range ProductList {
		db.Create(&prod)
	}

}

func processOrder(c echo.Context) error {

	placedOrder := &[]ProductOrder{}

	s := &OrderStatus{
		Success: true,
	}

	if err := c.Bind(placedOrder); err != nil {
		s = &OrderStatus{
			Success: false,
		}
	}

	fmt.Println(placedOrder)

	return c.JSON(http.StatusOK, s)
}

func main() {
	e := echo.New()

	initDB()

	e.Static("/", "./public")
	e.File("/", "./public/index.html")
	e.POST("/createProduct", createProduct)
	e.POST("/placeOrder", processOrder)
	e.GET("/getProducts", getProducts)
	e.GET("/getProduct", getProduct)
	e.PUT("/updateProduct", updateProduct)
	e.DELETE("/deleteProduct", deleteProduct)
	e.Start(":3000")
	fmt.Println("Hello, world!")
}
