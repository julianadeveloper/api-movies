docker build -t juhdeveloper/api-movies:1.0.6 -f Dockerfile.prod .

docker push juhdeveloper/api-movies:1.0.6

docker run juhdeveloper/api-movies:1.0.6
