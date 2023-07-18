import React, {useState } from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface selectedIcon {
  name: string;
  isSelected: boolean;
}
interface IconsArray extends Array<selectedIcon> { }

export const Tab1Screen = () => {

  const [selectedIcon, setSelectedIcon] = useState(0);

  const icons: IconsArray = [{ name: "airplane-outline", isSelected: false },
  { name: "accessibility-outline", isSelected: false },
  { name: "add-outline", isSelected: false },
  { name: "american-football-outline", isSelected: false },
  { name: "analytics-outline", isSelected: false },
  { name: "aperture-outline", isSelected: false },
  { name: "apps-outline", isSelected: false },
  { name: "archive-outline", isSelected: false },
  { name: "bar-chart-outline", isSelected: false },
  { name: "baseball-outline", isSelected: false },
  { name: "basket-outline", isSelected: false },
  { name: "bed-outline", isSelected: false },
  { name: "bus-outline", isSelected: false },
  { name: "cut-outline", isSelected: false },
  { name: "game-controller-outline", isSelected: false },
  { name: "git-network-outline", isSelected: false },
  { name: "heart-half-outline", isSelected: false },
  { name: "language-outline", isSelected: false },
  { name: "moon-outline", isSelected: false },
  { name: "newspaper-outline", isSelected: false },
  { name: "paper-plane-outline", isSelected: false },
  { name: "paw-outline", isSelected: false },
  { name: "planet-outline", isSelected: false },
  { name: "rainy-outline", isSelected: false },
  { name: "ribbon-outline", isSelected: false },
  { name: "settings-outline", isSelected: false },
  { name: "tennisball-outline", isSelected: false },
  { name: "trash-outline", isSelected: false },
  { name: "thumbs-up-outline", isSelected: false },
  { name: "wine-outline", isSelected: false }
  ]

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <Text style={styles.title}>Iconos</Text>
      <View style={styles.listaIconos}>

        {
          icons.map((icon, index) =>
            <TouchableOpacity onPress={() => setSelectedIcon(index)}>
              <Icon name={icon.name} size={50} color={selectedIcon === index ? '#ff8000' : colores.primary} />
            </TouchableOpacity>
          )
        }

      </View>
      <View>
        <Text style={styles.nombreIcono}>{icons[selectedIcon].name}</Text>
      </View>
    </View>
  )
}
