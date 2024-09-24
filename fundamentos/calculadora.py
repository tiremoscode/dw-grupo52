def suma():
    valor1 = 10
    valor2 = 20
    suma = valor1 + valor2
    print(f'La suma es igual a: {suma}')
    
def resta():
    valor1 = 10
    valor2 = 20
    resta = valor1 - valor2
    print(f'La resta es igual a: {resta}')
    
def multiplicacion():
    x=float(input('Ingrese un multiplicador'))
    y=float(input('Ingrese un valor'))
    product=x*y
    print('El producto de ', x, '*', y, 'es ', product)
    
def division():
    valor1 = 24
    valor2 = 8
    divis = valor1 / valor2
    print(f'La división es igual a: {divis}')
    
def calculadora():
    suma()
    resta()
    multiplicacion()
    division()
    
calculadora()