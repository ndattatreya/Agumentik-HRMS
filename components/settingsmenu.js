import React, { useState } from 'react';
import '../styles/settingmenu.css';

const SettingsMenu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState('Cyan');
  const [settings, setSettings] = useState({
    reportPanel: false,
    emailRedirect: true,
    notifications: true,
    autoUpdates: false,
    offline: false,
    locationPermission: false,
  });

  const toggleSetting = (setting) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [setting]: !prevSettings[setting]
    }));
  };

  const skins = ['Purple', 'Blue', 'Cyan', 'Green', 'Orange', 'Blush'];

  return (
    <div className="settings-menu">
      <div className="theme-option">
        <label>
          <input 
          className='checkmark'
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)} 
          />
          Enable Dark Mode!
        </label>
      </div>
      <hr />
      <div className="choose-skin">
        <p>Choose Skin</p>
        <div className="skins">
          {skins.map(skin => (
            <div 
              key={skin} 
              className={`skin ${skin.toLowerCase()} ${selectedSkin === skin ? 'selected' : ''}`} 
              onClick={() => setSelectedSkin(skin)}
            >
              <span>{skin}</span>
              {selectedSkin === skin && <span className="checkmark">&#10003;</span>}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="general-settings">
        <p>General Settings</p>
        {Object.keys(settings).map(setting => (
          <label key={setting} className="setting-option">
            <input 
              type="checkbox" 
              checked={settings[setting]} 
              onChange={() => toggleSetting(setting)} 
            />
            {setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
