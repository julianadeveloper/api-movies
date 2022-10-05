docker build -t juhdeveloper/api-movies:1.0.0 -f Dockerfile.prod .

docker push juhdeveloper/api-movies:1.0.3

docker run juhdeveloper/api-movies:1.0.1
