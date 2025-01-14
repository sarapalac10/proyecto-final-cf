export const gatos = [
    {
        nombre: 'Luna',
        id: 1,
        sexo: 'Hembra',
        estado: 'Adoptado',
        edad: '2 años',
        caracteristicas: 'Gata atigrada marrón de tamaño mediano con ojos verdes brillantes. Es juguetona y le encanta perseguir juguetes con plumas.',
        historia: 'Luna fue encontrada en un parque local, desorientada y hambrienta. Tras ser rescatada, demostró ser muy cariñosa y busca un hogar donde pueda recibir mucho amor.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/luna_1.png?t=2025-01-13T03%3A38%3A09.141Z',
    },
    {
        nombre: 'Max',
        id: 2,
        sexo: 'Macho',
        estado: 'Disponible',
        edad: '1 año',
        caracteristicas: 'Gato blanco con manchas negras en el lomo y ojos azules intensos.Es tranquilo y disfruta de las siestas al sol.',
        historia: 'Max fue abandonado en una caja cerca de un refugio.A pesar de su difícil comienzo, es muy afectuoso y se lleva bien con otros gatos.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/max_1.png?t=2025-01-13T03%3A40%3A08.250Z',
    },
    {
        nombre: 'Sombra',
        id: 3,
        sexo: 'Hembra',
        estado: 'Disponible',
        edad: '3 años',
        caracteristicas: 'Gata negra de pelo largo y sedoso con ojos amarillos penetrantes. Es curiosa y le gusta explorar su entorno.',
        historia: 'Sombra fue rescatada de una colonia de gatos callejeros. Al principio era tímida, pero con paciencia ha mostrado su lado más dulce y ahora busca una familia que la cuide.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/sombra_1.png?t=2025-01-13T03%3A42%3A52.856Z',
    },
    {
        nombre: 'Tigre',
        id: 4,
        sexo: 'Macho',
        estado: 'Disponible',
        edad: '1 año',
        caracteristicas: 'Gato naranja con rayas tipo tigre y ojos verdes. Es enérgico y le encanta jugar con pelotas.',
        historia: 'Tigre fue encontrado en un estacionamiento, buscando comida. Desde su rescate, ha mostrado ser muy sociable y está listo para un hogar lleno de diversión.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/tigre_1.png',
    },
    {
        nombre: 'Nube',
        id: 5,
        sexo: 'Hembra',
        estado: 'Disponible',
        edad: '2 años',
        caracteristicas: 'Gata gris de pelaje suave y ojos azules claros. Es cariñosa y disfruta de los mimos.',
        historia: 'Nube fue rescatada de una casa abandonada. A pesar de su pasado, es confiada y busca una familia que le brinde el cariño que merece.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/nube_1.png?t=2025-01-13T03%3A41%3A13.333Z',
    },
    {
        nombre: 'Félix',
        id: 6,
        sexo: 'Macho',
        estado: 'Disponible',
        edad: '3 años',
        caracteristicas: 'Gato blanco y gris con ojos verdes grandes y brillantes. Tiene un pelaje suave y es conocido por su cola esponjosa',
        historia: ' Felix fue encontrado deambulando cerca de un restaurante, buscando comida. A pesar de su difícil vida en las calles, es un gato confiado y juguetón. Le encanta observar los pájaros desde la ventana y jugar con pelotas de lana.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/nube_1.png?t=2025-01-13T03%3A41%3A13.333Z',
    },
    {
        nombre: 'Mila',
        id: 7,
        sexo: 'Hembra',
        estado: 'Disponible',
        edad: '1 año',
        caracteristicas: 'Gata de pelaje crema con tonos dorados y ojos color miel. Es pequeña y ágil, siempre llena de energía.',
        historia: 'Mila fue rescatada de una zona de construcción donde se escondía en busca de refugio. Es curiosa y le gusta explorar, aunque también disfruta de un buen descanso en un lugar cálido. Busca una familia con la que pueda compartir su amor y energía.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/mila_1.png?t=2025-01-13T03%3A42%3A05.752Z',
    },
    {
        nombre: 'Oliver',
        id: 8,
        sexo: 'Macho',
        estado: 'Disponible',
        edad: '4 años',
        caracteristicas: 'Gato negro con ojos verdes intensos. Tiene una personalidad tranquila y le gusta la compañía humana.',
        historia: 'Oliver fue abandonado frente a un refugio durante una tormenta. Al principio era tímido, pero con el tiempo se ha vuelto confiado y cariñoso. Ahora, solo quiere un hogar tranquilo y acogedor donde pueda pasar sus días descansando.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/oliver_1.png',
    },
    {
        nombre: 'Copito',
        id: 9,
        sexo: 'Hembra',
        estado: 'Disponible',
        edad: '6 meses',
        caracteristicas: 'Gata tricolor con un ojo verde y otro azul, lo que la hace única y encantadora. Es juguetona y curiosa.',
        historia: 'Chloe fue encontrada en un parque junto a sus hermanos. Es la más aventurera de todos y tiene un espíritu independiente. Sin embargo, también es muy cariñosa y busca constantemente atención. Está lista para un hogar lleno de amor.',
        imagen: 'https://bcgyxxhamivxhadjunko.supabase.co/storage/v1/object/public/gatos/copito_1.png?t=2025-01-13T03%3A44%3A42.012Z',
    },
];

export type Gato = {
    nombre: string;
    id: string | number;
    sexo: string;
    estado: string;
    edad: string;
    caracteristicas: string;
    historia: string;
    imagen: string;
}