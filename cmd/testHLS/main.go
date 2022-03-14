package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Static("/m3u8/", "./video/m3u8")
	app.Static("/", "./web/build")
	app.Listen(":8080")
}
