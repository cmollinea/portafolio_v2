export class Testimonials {
  static #instance: Testimonials;

  public static get instance(): Testimonials {
    if (!Testimonials.#instance) {
      Testimonials.#instance = new Testimonials();
    }

    return Testimonials.#instance;
  }

  private es = [
    {
      name: 'Samuel Llanes',
      ocupation: 'Fotógrafo',
      content:
        'La atención fue alo que siempre me gustó desde que contacté a Carlos por primera vez, siempre cuidó cada detalle de mi sitio, y el resultado final fue exactamente lo que buscaba'
    },
    {
      name: 'Jorge Acosta',
      ocupation: 'Fundador del bar La Mixóloga',
      content:
        'Gracias Carlos por la dedicación,pasión y ese amor que le pones al trabajo  en satisfacer aún los gustos o deseos complejos  de los que solicitamos tus servicios.  Muchas gracias  sin dudar te contrataría las veces necesarias 🙏🏻'
    },
    {
      name: 'Rachel',
      ocupation: 'Comunity Manager en FAMEC',
      content:
        'El trabajo de Yoan como desarrollador web superó mis expectativas, logró la imagen acorde a mis requerimientos y también facilitó su diseño para que mis clientes pudieran navegar con facilidad en el sitio web.'
    },
    {
      name: 'Alejandro',
      ocupation: 'Creador de LAMBDA Solar',
      content:
        'Estamos muy satisfechos con la renovación de nuestra página web para Lambda. El nuevo diseño es moderno y ha mejorado la experiencia del usuario'
    },
    {
      name: 'Marcos Antonio Avila',
      ocupation: 'Desarrollador Backend',
      content:
        'Tuve el placer de conocer a Yoan en un momento crucial de mi carrera, cuando estaba indeciso sobre si debería estudiar desarrollo frontend. Durante nuestra colaboración en un proyecto, quedé impresionado por su habilidad para desglosar conceptos complejos de manera clara y accesible.'
    }
  ];

  private en = [
    {
      name: '',
      ocupation: '',
      content: ''
    },
    {
      name: '',
      ocupation: '',
      content: ''
    },
    {
      name: '',
      ocupation: '',
      content: ''
    },
    {
      name: '',
      ocupation: '',
      content: ''
    },
    {
      name: '',
      ocupation: '',
      content: ''
    }
  ];

  public getTestimonials(lang: 'es' | 'en') {
    return this[lang];
  }
}
