# Playwright testing 
## Plan de pruebas

#### **Caso de prueba 1**: Validación de total de productos seleccionados.

#### Alcance de la prueba
Se debe validar que la selección de varios productos de compra tenga los precios correctos.

##### Estrategia de la prueba
1. En la página principal, debe existir un carrusel de productos donde se pueda seleccionar por lo menos uno.
2. Al seleccionar uno de los productos provistos en el carrusel se debe tener la opción de viajar al detalle del producto.
3. ingresa al detalle del producto que se encuentra en la primera línea del carrusel de los productos mostrados en la aplicación, se agrega al carrito de compras.
4. Se comprueba que exista el mensaje “Product added” en una alerta del navegador.
Se realiza el mismo procedimiento con un segundo producto.
5. Se debe tener la opción de ingresar a carrito de compras donde se pueda visualizar los productos seleccionados.
6. Se ingresa al carrito de compras  y se comprueba que el total del valor a pagar sea la suma de los precios de los dos productos anteriores.

#### **Caso de prueba 2**: Validación de total de productos seleccionados tras eliminación de producto.

#### Alcance de la prueba
Verificar que cuando se elimine un producto del carrito el valor total en el carrito disminuye y corresponde al valor anterior menos el valor del producto eliminado.

##### Estrategia de la prueba
1. Ingresar al carrito de compras.
2. El carrito de compras debe contener mínimo un producto para poder eliminar.
3. Seleccionar el producto que se desea eliminar.
4. Dar clic en el botón de eliminar en el producto seleccionado.
5. Se valida que el valor que queda en el carrito sea el valor anterior menos el valor del producto eliminado.

#### **Caso de prueba 3**: Validación del valor total de los productos en la sección de Place Order.

#### Alcance de la prueba
Verificar que cuando se dé click en el botón de Place Order el valor total sea el mismo que se muestra en el carrito

##### Estrategia de la prueba
Prerrequisitos casos de prueba 1 y 2
1. Se agrega un nuevo producto al carrito
2. Se ingresa al carrito
3. Se valida el valor total del carrito
4. Se ingresa a Place Order.
5. Se valida el valor total de Place Order.
5. Se valida que el valor total de carrito sea igual al valor total de Place Order.
