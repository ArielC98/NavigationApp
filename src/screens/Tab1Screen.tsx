import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableIcon } from '../components/TouchableIcon';

interface selectedIcon {
  name: string
}
interface IconsArray extends Array<selectedIcon> { }

export const Tab1Screen = () => {

  const [selectedIcon, setSelectedIcon] = useState(0);

  const icons: IconsArray = [{ name: "airplane-outline" },
  { name: "accessibility-outline" },
  { name: "add-outline" },
  { name: "american-football-outline" },
  { name: "analytics-outline" },
  { name: "aperture-outline" },
  { name: "apps-outline" },
  { name: "archive-outline" },
  { name: "bar-chart-outline" },
  { name: "baseball-outline" },
  { name: "basket-outline" },
  { name: "bed-outline" },
  { name: "bus-outline" },
  { name: "cut-outline" },
  { name: "game-controller-outline" },
  { name: "git-network-outline" },
  { name: "heart-half-outline" },
  { name: "language-outline" },
  { name: "moon-outline" },
  { name: "newspaper-outline" },
  { name: "paper-plane-outline" },
  { name: "paw-outline" },
  { name: "planet-outline" },
  { name: "rainy-outline" },
  { name: "ribbon-outline" },
  { name: "settings-outline" },
  { name: "tennisball-outline" },
  { name: "trash-outline" },
  { name: "thumbs-up-outline" },
  { name: "wine-outline" }
  ]

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <View style={{flexDirection:'row',gap:10, flexWrap:'wrap', justifyContent:'center'}}>

        {/* {
          icons.map((icon, index) =>
            <TouchableOpacity key={index} onPress={() => setSelectedIcon(index)}>
              <Icon name={icon.name} size={50} color={selectedIcon === index ? '#ff8000' : colores.primary} />
            </TouchableOpacity>
          )
        } */}

        <TouchableIcon name='airplane-outline'/>
        <TouchableIcon name='tennisball-outline'/>
        <TouchableIcon name='add-icon'/>
        <TouchableIcon name='wine-outline'/>
        <TouchableIcon name='trash-outline'/>
        <TouchableIcon name='thumbs-up-outline'/>

      </View>
    </View>
  )
}
