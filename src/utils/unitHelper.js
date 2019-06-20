import { drawUnitIcon } from '../views/Map/utils/drawIcon';
import isClient from '.';
import SettingsUtility from './settings';
import config from '../../config';

const accessibilityColors = config.accessibility_colors;

const generateMarkerIcons = () => {
  if (!isClient()) {
    return null;
  }
  const markers = {};
  Object.keys(accessibilityColors).forEach((key) => {
    const color = accessibilityColors[key];
    if (color) {
      const iconLeft = drawUnitIcon(color, 70);
      const iconLeft2 = drawUnitIcon(color, 80);
      const iconMiddle = drawUnitIcon(color, 90);
      const iconRight = drawUnitIcon(color, 100);
      const iconRight2 = drawUnitIcon(color, 110);

      markers[key] = [iconLeft, iconLeft2, iconMiddle, iconRight, iconRight2];
    }
  });
  return markers;
};

class UnitHelper {
  static accessibilityColors = accessibilityColors;

  static markerIcons = generateMarkerIcons();

  static isValidUnit = unit => unit && unit.object_type === 'unit';

  static getShortcomingCount(unit, settings) {
    if (unit && settings) {
      // Check if user has settings
      const currentSettings = SettingsUtility.parseShortcomingSettings(settings);
      if (currentSettings.length) {
        // eslint-disable-next-line camelcase
        const { accessibility_shortcoming_count } = unit;

        // Check if unit has shortcoming info
        const shortcomingKeys = Object.keys(accessibility_shortcoming_count);
        if (shortcomingKeys.length) {
          let shortcomingCount = 0;

          if (currentSettings.length) {
            // Loop through currentSetting keys and see if unit has shortcomings
            currentSettings.forEach((settingKey) => {
              if (
                Object.prototype.hasOwnProperty.call(
                  accessibility_shortcoming_count,
                  settingKey,
                )
              ) {
                shortcomingCount += accessibility_shortcoming_count[settingKey];
              }
            });

            return shortcomingCount;
          }
        }
        return null;
      }
    }
    return 0;
  }

  static getMarkerType = (count) => {
    if (typeof count === 'number') {
      if (count > 0) {
        return 'shortcomings';
      }
      return 'default';
    }
    return 'missing_info';
  }

  static getIconColor = count => (
    this.accessibilityColors[this.getMarkerType(count)]
  )

  static getIcon = (unit, settings, isStraight = false) => {
    const shortcomingCount = this.getShortcomingCount(unit, settings);
    const markerType = this.getMarkerType(shortcomingCount);

    let iconIndex = 2;
    if (!isStraight) {
      iconIndex = Math.floor(Math.random() * 5);
    }

    const icon = this.markerIcons[markerType][iconIndex];

    return icon;
  }
}

export default UnitHelper;
