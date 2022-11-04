docker build -t juhdeveloper/api-movies:1.0.7 -f Dockerfile.prod .

docker push juhdeveloper/api-movies:1.0.7

docker run juhdeveloper/api-movies:1.0.7
