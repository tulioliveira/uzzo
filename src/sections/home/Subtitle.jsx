import React from 'react'
import View from 'src/components/View'
import Text from 'src/components/Text'
import { motion } from 'framer-motion'

const AnimatedView = motion.custom(View)

const Subtitle = () => {

  return <AnimatedView
    flexDirection={['column', 'row']}
    alignSelf="stretch"
    alignItems="center"
    justifyContent="space-between"
    mt={2}
    mb={4}
    opacity={0}
    animate={{ opacity: [0, 1] }}
    transition={{ ease: 'easeInOut', duration: 0.75 }}
  >
    <View flex={[0, 1]} alignItems="center" justifyContent="center">
      <View width={['72px', '96px']}>
        <svg viewBox="-8 -8 106 97" width="100%">
          <path
            fill="none"
            strokeWidth="4"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 44.5H2V80H13.5V61.5H49V80H60V61.5M13.5 44.5V25M13.5 44.5H49M13.5 25H26L21.5 3H5.5L1 25H13.5ZM49 44.5H60V61.5M49 44.5V19.5C52.5 -4 85.5 -4 89 19.5V80H77.5V61.5H60"
          />
        </svg>
      </View>
    </View>
    <View flex={[0, 2]} alignItems="center" justifyContent="center">
      <Text type="h2" textAlign="center" m={3}>Atendimento sob medida</Text>
      <Text maxWidth="700px" mx={3} textAlign="center">Nossa missão é satisfazer o cliente, gerando valor para os nossos sócios, colaboradores, comunidade e meio ambiente, através de uma postura ética nos negócios, diferenciando-nos pela qualidade dos nossos produtos, serviços e atendimento.</Text>
    </View>
    <View flex={[0, 1]} alignItems="center" justifyContent="center" display={['none', 'flex']}>
      <svg viewBox="-8 -8 96 96" width="96px">
        <path
          fill="none"
          strokeWidth="5"
          stroke="black"
          strokeLinecap="round"
          d="M31 79H1V53M43.5 62L55 79H79V41.5M79 41.5V1H42M79 41.5H29.5M42 1H1V53M42 1V26.5M1 53H18"
        />
      </svg>
    </View>
  </AnimatedView>
}

export default Subtitle