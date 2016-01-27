if [ -d "/var/www/html/users/" ]; then
cp -Rf ./* /var/www/html/users/
else
mkdir /var/www/html/users/
cp -Rf ./* /var/www/html/users/
fi
