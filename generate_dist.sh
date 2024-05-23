docker build -t isspa-vitepress .
docker run --name isspa-vitepress-container isspa-vitepress
docker cp isspa-vitepress-container:/app/docs/.vitepress/dist ./staticfiles
docker rm isspa-vitepress-container
# docker run --name my-apache-container -d -p 8080:80 -v $(pwd)/dist_ssd:/usr/local/apache2/htdocs/ httpd:2.4
