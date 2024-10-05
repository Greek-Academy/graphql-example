FROM mysql:9

COPY ./init/init.sql /docker-entrypoint-initdb.d/init.sql
RUN chmod 0755 /docker-entrypoint-initdb.d/init.sql
EXPOSE 3306

CMD ["mysqld"]