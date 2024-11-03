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
      name: 'Samuel Llanes',
      occupation: 'Photographer',
      content:
        'The attention was what I have always liked since I first contacted Carlos; he always took care of every detail of my site, and the final result was exactly what I was looking for.'
    },
    {
      name: 'Jorge Acosta',
      occupation: 'Founder of La Mixóloga bar',
      content:
        'Thank you, Carlos, for your dedication, passion, and the love you put into your work to satisfy even the complex tastes or desires of those who request your services. Thank you very much; I would not hesitate to hire you as many times as necessary 🙏🏻.'
    },
    {
      name: 'Rachel',
      occupation: 'Community Manager at FAMEC',
      content:
        'Yoan’s work as a web developer exceeded my expectations; he achieved the image in line with my requirements and also facilitated its design so that my clients could navigate the website easily.'
    },
    {
      name: 'Alejandro',
      occupation: 'Creator of LAMBDA Solar',
      content:
        'We are very satisfied with the renovation of our website for Lambda. The new design is modern and has improved the user experience.'
    },
    {
      name: 'Marcos Antonio Avila',
      occupation: 'Backend Developer',
      content:
        'I had the pleasure of meeting Yoan at a crucial moment in my career when I was unsure whether I should study frontend development. During our collaboration on a project, I was impressed by his ability to break down complex concepts in a clear and accessible manner.'
    }
  ];

  public getTestimonials(lang: 'es' | 'en') {
    return this[lang];
  }
}
