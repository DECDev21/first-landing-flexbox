const usuario = {
    nombre: "Diego",
    edad: 32,
    deuda: 0
}

let pedido = [];
let costoPedido = 0;

const MOSTRARMENU = () => {
    console.log(`CODIGO - PRODUCTO - COSTO`)
    //    PRODUCTOS.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`))
    for (let producto of PRODUCTOS) {
        console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
    }
}

const pedirProducto = cod => {
    if (!cod) return "Ingrese un código válido";

    const productoEncontrado = PRODUCTOS.find(producto => producto.codigo === cod)
    if (!productoEncontrado) return "El código del producto no existe"

    pedido.push(productoEncontrado)
    console.log("Su pedido ha sido procesado. Su pedido es:")
    return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
    let costo = 0;
    for (producto of pedido) {
        costo += producto.costo;
    }
    costoPedido = costo;
    return costoPedido
}

const finalizarPedido = () => {
    calcularCosto();
    usuario.deuda = costoPedido;

    pedido = [];
    costoPedido = 0;
    return `${usuario.nombre}, debes pagar $${usuario.deuda}`
}

const pagarPedido = montoEntregado => {
    if (montoEntregado < usuario.deuda) {
        return 'Pagara prata'
    } else if (montoEntregado === usuario.deuda) {
        usuario.deuda = 0;
        return 'La transacción ha sido realizada con éxito'
    } else {
        usuario.deuda = 0;
        return `La transacción ha sido realizada con éxito. Su vuelto es ${montoEntregado - usuario.deuda}`
    }
}

/*  Empieza la bola
let x  = 0, y = 0;

addEventListener('keyup', e => {
    const ball = document.getElementById('ball')
    const move = direction => {
        switch (direction) {
            case 'up':
                y--
                break;
            case 'down':
                y++
                break;
            case 'left':
                x--
                break;
            case 'right':
                x++
            default:
                break;

        } 
        ball.style.transform = `translate(${x*10}px, ${y*10}px)`
    }
/*    const up = () => {
        y--
        move()
    }
    const down = () => {
        y++
        move()
    }
    const left = () => {
        x--
        move()
    }
    const right = () => {
        x++
        move()
    }
*/
/*    switch (e.key) {
        case 'ArrowUp':
            move('up')
            break;
        case 'ArrowDown':
            move('down')
            break;
        case 'ArrowLeft':
            move('left')
            break;
        case 'ArrowRight':
            move('right') 
            break
        default:
            break;
    }
})
Termina la bola */

const form = document.getElementById('form');
const rememberPassword = document.getElementById('remember-password')

form.addEventListener('submit', () => {
    console.log('Ha enviado el formulario')
})

rememberPassword.addEventListener('change', e => {
    if (e.target.checked) {
        console.log('El usuario quiere recordar su contraseña')
    } else {
        console.log('El usuario no  quiere recordar su contraseña')
    }
})

function mapString(string) {
    let map = {};
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (map[letter]) {
            map[letter].push(i);
            console.log(map);
        } else {
            map[letter] = [i];
            console.log(map)
        }
    }
    return map;
}
mapString('Diego')



