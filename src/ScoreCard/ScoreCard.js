import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const user_name = window.localStorage.getItem('f_name') +" "+ window.localStorage.getItem('l_name');

const ScoreCard = () => (
  <Card>
    <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQF_uzk_FzJdyg/profile-displayphoto-shrink_200_200/0/1636397936222?e=1649289600&v=beta&t=8L1ipuAsbVf7qGYm2RR5EfYymJHCB2f0Kl9ooxkWl08' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{user_name}</Card.Header>
      <Card.Meta>Carbon Id: {(Math.random() + 1).toString(36).substring(7)}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='dollar sign' />
        Redeem
      </a>
    </Card.Content>
  </Card>
)

export default ScoreCard