CREATE DATABASE cook_with_me;
CREATE USER 'django_admin' IDENTIFIED BY 'N1chola$andj0sh';
GRANT ALL ON cook_with_me.* TO 'django_admin';
FLUSH PRIVILEGES;
