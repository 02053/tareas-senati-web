<section class="job">

<em>Algoritmia de Programacion</em>

# 2. Codigo de la pagina 9 del manual extenso

<em>Agosto 9.2022 <span>|</span> Guillermo Mestas</em>

## Extension:

```python
mensaje4 = 'hola' + ' ' + 'mundo'
print(len(mensaje4))
```

Salida:

```shell
> 10
```

## Encontrar:

```python
mensaje5 = 'Hola Mundo'
mensaje5a = mensaje5.find("Mundo")
print(mensaje5a)
```

Salida:

```shell
> 5
```

Si la sub-cadena no está presente el programa imprimirá el valor -1.

```python
mensaje6 = 'Hola Mundo'
mensaje6a = mensaje6.find("ardilla")
print(mensaje6a)
```

Salida:

```shell
> -1
```

## Minusculas:

```python
mensaje7 = "HOLA MUNDO"
mensaje7a = mensaje7.lower()
print(mensaje7a)
```

Salida:

```shell
> hola mundo
```

## Reemplazar:

```python
mensaje8 = "HOLA MUNDO"
mensaje8a = mensaje8.replace("L", "pizza")
print(mensaje8a)
```

Salida:

```shell
> HOpizzaA MUNDO
```

## Cortar:

```python
mensaje9 = "Hola Mundo"
mensaje9a = mensaje9[1:8]
print(mensaje9a)
```

Salida:

```shell
> ola Mun
```

Puedes sustituir las variables por números enteros como en este ejemplo

```python
mensaje9 = "Hola Mundo"
startLoc = 2
endLoc = 8
mensaje9b = mensaje9[startLoc: endLoc]
print(mensaje9b)
```

Salida:

```shell
> la Mun
```

</section>
