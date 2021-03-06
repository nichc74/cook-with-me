# cook-with-me
Recipe Website

**Build**
``` shell
$ docker build -t <IMAGE NAME> .
```

**Run**
``` shell
$ docker run -p <LOCAL-PORT>:<CONTAINER-PORT> -it -d <IMAGE NAME>
```

**Login**
``` shell
$ docker exec -it <Container ID> /bin/bash
```

**Running Django**
```shell
$ python3 manage.py runserver 0:<CONTAINER-PORT>
```
Runs allows the django app to accept any interface running on `CONTAINER-PORT`.
