import React from 'react';

export class Rules extends React.Component {
  constructor(props) {
    super(props);
  }

  RULES = [
    'El que ocupa la casa, al irse llama a la Isabel, le paga cuando ella confirme que fue y avisa en WhatsApp que la casa está lista para usarse. Si ocurrió algún incidente o desperfecto también informa en WhatsApp',
    'El que llegue, al entrar revisa limpieza y envía a la Aniti lo que le parezca no fue bien hecho. Favor revisar bien los WC.',
    'El refrigerador debe quedar vacío y limpio.',
    'Los tarros de basura de baños deben vaciarse el tarro de afuera. La idea es que la Isabel se encuentre con la casa ordenada y solo haga aseo profundo.',
    'El banco hay que entrarlo y dejarlo en el hall de entrada, para evitar que se lo roben.',
    'Los muebles de fierro de terraza con sus cojines también se dejan en el living para evitar se los roben.',
    'El gas de la caldera, de la cocina y de los calefont debe quedar cortado.',
    'Las luces todas apagadas.',
    'Dejar la ropa sucia, sábanas y toallas en la cocina para que sea lavada.',
    'En cada baño debe quedar un rollo de papel nuevo o casi nuevo.',
    'No dejar shampoo y útiles de aseo personal, cepillos de dientes, pasta, etc.',
    'La freídora o se deja limpia sin aceite o se avisa para q la Isabel la limpie.',
    'El refrigerador de la bodega debe quedar desenchufado. El de la cocina no, pero vacío.',
    'La alarma tiene que quedar conectada, y antes hay que revisar que las ventanas de toda la casa estén BIEN cerradas porque se conecta aun cuando estén aparentemente cerradas.',
  ]

  render() {
    return (
      <div>
        <h2 className='centered rules-title'>Reglas de la casa</h2>
        <ol>
          {this.RULES.map((rule) => {
            return <li className='rule'>{rule}</li>
          })}
        </ol>
      </div>
    );
  }
}