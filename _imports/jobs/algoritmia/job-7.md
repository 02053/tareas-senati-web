<section class="job">

<em>Algoritmia de Programacion</em>

# 7. Ejercicios de Autoestudio 2

<em>Agosto 10.2022 <span>|</span> Guillermo Mestas</em>

## Funcion basica:

```python
def suma(a, b):
    print("Se suman dos numeros:")
    resultado = a + b
    return resultado

sumatoria = suma(1, 4)
print(sumatoria)
```

Salida:

```shell
> 5
```

## Generar un bucle de un numero con su potencia:

```python
def run():
    LIMITE = 1000000

    contador = 0
    potencia_2 = 2 ** contador

    while potencia_2 < LIMITE:
        print(f"2 elevado a {str(contador)} es igual a: {str(potencia_2)}")
        contador = contador + 1
        potencia_2 = 2 ** contador

if __name__=='__main__':
    run()
```

Salida:

```shell
> 2 elevado a 0 es igual a: 1
  2 elevado a 1 es igual a: 2
  2 elevado a 2 es igual a: 4
  2 elevado a 3 es igual a: 8
  2 elevado a 4 es igual a: 16
  2 elevado a 5 es igual a: 32
  2 elevado a 6 es igual a: 64
  2 elevado a 7 es igual a: 128
  2 elevado a 8 es igual a: 256
  2 elevado a 9 es igual a: 512
  2 elevado a 10 es igual a: 1024
  2 elevado a 11 es igual a: 2048
  2 elevado a 12 es igual a: 4096
  2 elevado a 13 es igual a: 8192
  2 elevado a 14 es igual a: 16384
  2 elevado a 15 es igual a: 32768
  2 elevado a 16 es igual a: 65536
  2 elevado a 17 es igual a: 131072
  2 elevado a 18 es igual a: 262144
  2 elevado a 19 es igual a: 524288
```

## Adivinar numero:

```python
import random

def run():
    numero_aletorio = random.randint(1, 100)
    numero_elegido = int(input("Elige un numero del 1 al 100: "))

    while numero_elegido != numero_aletorio:
        if numero_elegido < numero_aletorio:
            print("Busca un numero mas grande")
        else:
            print("Busca un numero mas pequeño")

        numero_elegido = int(input("Elige otro numero: "))

    print("Ganaste!")

if __name__=='__main__':
    run()
```

Salida:

```shell
> Elige un numero del 1 al 100: 80
  Busca un numero mas pequeño
  Elige otro numero: 20
  Busca un numero mas grande
  Elige otro numero: 50
  Busca un numero mas pequeño
  Elige otro numero: 30
  Busca un numero mas pequeño
  Elige otro numero: 25
  Busca un numero mas pequeño
  Elige otro numero: 21
  Ganaste!
```

## Conversor de monedas:

```python
def conversor(tipo_moneda, valor_dolar):
    pesos = input(f"Cuantos {tipo_moneda} tienes?: ")
    pesos = float(pesos)
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print(f"Tienes ${dolares} dolares")

menu = '''
Bienvenido al conversor de monedas 💰

1 - Pesos colombianos
2 - Pesos argentinos
3 - Soles

Elige una opcion: '''

opcion = int(input(menu))

if opcion == 1:
    conversor("pesos Colombianos", 3875)
elif opcion == 2:
    conversor("pesos Argentinos", 65)
elif opcion == 3:
    conversor("Soles", 3.80)
else:
    print("Ingrese una opcion correcta por favor.")
```

Salida:

```shell
> Bienvenido al conversor de monedas 💰

  1 - Pesos colombianos
  2 - Pesos argentinos
  3 - Soles

  Elige una opcion: 3
  Cuantos Soles tienes?: 246
  Tienes $64.74 dolares
```

## Aplicacion de diccionarios con un for:

```python
def run():
    mi_diccionario = {
        "llave1": 1,
        "llave2": 2,
        "llave3": 3
    }

    poblacion_paises = {
        "Argentina": 44938712,
        "Brazil": 210147125,
        "Colombia": 50372424
    }

    for pais, poblacion in poblacion_paises.items():
        print(f"{pais} tiene {str(poblacion)} habitantes")

if __name__ == '__main__':
    run()
```

Salida:

```shell
> Argentina tiene 44938712 habitantes
  Brazil tiene 210147125 habitantes
  Colombia tiene 50372424 habitantes
```

## Generador de contraseñas:

```python
import random

def generar_contraseña():
    mayusculas = ["A", "B", "C", "D", "E", "F", "G"]
    minusculas = ["a", "b", "c", "d", "e", "f", "g"]
    simbolos = ["!", "#", "&", "/", "(", ")"]
    numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    caracteres = mayusculas + minusculas + simbolos + numeros
    contraseña = []

    for i in range(15):
        caracter_random = random.choice(caracteres)
        contraseña.append(caracter_random)

    contraseña = "".join(contraseña)
    return contraseña

def run():
    contraseña = generar_contraseña()
    print(f"Tu nueva contraseña es: {contraseña}")

if __name__=='__main__':
    run()
```

Salida:

```shell
> Tu nueva contraseña es: 024EaD3CcAb4(/2
```

## Decir si un numero es palindromo:

```python
def palindromo(palabra):
    palabra = palabra.replace(' ', "")
    palabra = palabra.lower()
    palabra_invertida = palabra[::-1]

    if palabra == palabra_invertida:
        return True
    else:
        return False

def run():
    palabra = input("Escribe una palabra: ")
    es_palindromo = palindromo(palabra)
    if es_palindromo == True:
        print("Es palindromo")
    else:
        print("No es palindromo")

if __name__ == "__main__":
    run()
```

Salida:

```shell
> Escribe una palabra: 121
  Es palindromo
```

## Hallar un numero primo:

```python
def es_primo(numero):
    contador = 0

    for i in range(1, numero + 1):
        if i == 1 or i == numero:
            continue
        if numero % i == 0:
            contador += 1

    if contador == 0:
        return True
    else:
        return False

def run():
    numero = int(input("Escribe un numero: "))
    if es_primo(numero):
        print("Es primo")
    else:
        print("No es primo")

if __name__ == "__main__":
    run()
```

Salida:

```shell
> Escribe un numero: 7
  Es primo
```

## Recorrer una palabra:

```python
weight = input('¿Cual es tu peso en Kg? ')
height = input('¿Cual es tu alture en metros? ')
bmi = round(float(weight) / float(height) ** 2, 2)

print(f'Tu indice de masa corporal es: {str(bmi)}')
```

Salida:

```shell
> Escribe una frase: Hola mundo
  H
  O
  L
  A

  M
  U
  N
  D
  O
```

</section>
