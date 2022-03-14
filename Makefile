build: clean
	mkdir dist
	go build -o ./dist/testHLS ./cmd/testHLS/main.go

clean:
	rm -rf ./dist