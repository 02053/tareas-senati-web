<section class="job">

<em>Algoritmia de Programacion</em>

# 6. Ejercicio pagina 40

<em>Agosto 17.2022 <span>|</span> Guillermo Mestas</em>

```python
def prime_number(number):
    if number == 1 or number == 0:
        return False
    if number == 2:
        return True
    elif number > 2:
        for divisor in range(2, number):
            if number % divisor == 0:
                return False
            elif number % divisor != 0 and divisor == number - 1:
                return True

for i in range(1, 21):
    if prime_number(i + 1):
        print(i + 1, end=' ')
print()
```

Salida:

```shell
> 2 3 5 7 11 13 17 19
```
</section>
