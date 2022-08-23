<section class="job">

<em>Algoritmia de Programacion</em>

# 9. Creacion de una base de datos en la consola

<em>Agosto 10.2022 <span>|</span> Guillermo Mestas</em>

## Listando las bases de datos y creando una nueva

![listando y creando una base de datos](../../assets/media/listado-y-creado-db.png)

En la captura se puede el listado de las bases de datos de mi ordernador la cual lo realizo con el
comando:

```sql
show databases;
```

despues creo la base de datos con mi nombre con el comando:

```sql
create database guillermo_daniel_mestas_alvarez;
```

y por ultimo realizo un nuevo listado de las bases de datos y se muestra la base de datos creada.

## Creando la tabla alumnos en la base de datos creada

![Creando tabla alumnos en la base de datos](../../assets/media/crear-decribir-tabla.png)

En la imagen se muestra la creacion de la tabla alumnos utilizando el comando:

```sql
create table alumnos (
    -> dni varchar(20) primary key,
    -> nombre varchar(150),
    -> correo varchar(100),
    -> edad int
    -> );
```

despues visualizamos la estructura de la tabla alumnos con el comando:

```sql
describe alumnos;
```

viendo los campos que definimos en la creacion de la tabla.

</section>
