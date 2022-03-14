build: clean
	mkdir dist
	go build -o ./dist/testHLS

clean:
	rm -rf ./dist