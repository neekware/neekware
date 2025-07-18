// Tailwind CSS configuration
tailwind.config = {
  darkMode: "class",
};

// Basic ehAye config functionality
function ehayeConfig() {
  return {
    darkMode: true,
    mobileMenu: false,
    config: {
      primaryVoice: 'Nathan',
      primaryVolume: 80,
      primaryRate: 180,
      secondaryVoice: 'Samantha',
      secondaryVolume: 75,
      secondaryRate: 175
    },
    
    init() {
      const stored = localStorage.getItem('darkMode');
      this.darkMode = stored === null ? true : stored === 'true';
      this.$watch('darkMode', value => localStorage.setItem('darkMode', value));
      
      // Set current year
      const currentYear = new Date().getFullYear();
      const yearElement = document.getElementById('currentYear');
      if (yearElement) {
        yearElement.textContent = currentYear;
      }
    },
    
    saveImmediately(voiceType) {
      const indicator = document.getElementById(`save-indicator-${voiceType}`);
      if (indicator) {
        indicator.textContent = 'Saved!';
        indicator.style.opacity = '1';
        setTimeout(() => {
          indicator.style.opacity = '0';
        }, 2000);
      }
    },
    
    testAudio(voiceType, event) {
      event.preventDefault();
      
      const messageElement = document.getElementById(`test-message-${voiceType}-config`);
      const message = messageElement ? messageElement.value : 'Test message';
      
      // Create a simple test using Web Speech API if available
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        
        if (voiceType === 'primary') {
          utterance.rate = this.config.primaryRate / 100;
          utterance.volume = this.config.primaryVolume / 100;
        } else {
          utterance.rate = this.config.secondaryRate / 100;
          utterance.volume = this.config.secondaryVolume / 100;
        }
        
        speechSynthesis.speak(utterance);
      } else {
        alert('Speech synthesis not supported in this browser. ehAye Audio would work with the full desktop application.');
      }
    }
  };
}