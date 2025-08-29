import DefaultTheme from 'vitepress/theme'

// Import scripts for custom functionality
import './script/redirect'

// Import styles for custom components
import CustomAnnouncement from './components/custom-announcement.vue'
import CustomButton from './components/custom-button.vue'
import CustomButtonGroup from './components/custom-button-group.vue'
import CustomDropdown from './components/custom-dropdown.vue'
import CustomDropdownGroup from './components/custom-dropdown-group.vue'
import CustomItemBox from './components/custom-item-box.vue'

// Export the default theme with custom components
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomAnnouncement', CustomAnnouncement),
    app.component('CustomButton', CustomButton),
    app.component('CustomButtonGroup', CustomButtonGroup),
    app.component('CustomDropdown', CustomDropdown),
    app.component('CustomDropdownGroup', CustomDropdownGroup),
    app.component('CustomItemBox', CustomItemBox)
  }
}
