export interface AppAccessibilityI18n {
  accessibility: {
    ariaLabels: Record<string, string>;
    keyboardNavigation: {
      enabled: boolean;
      tabOrder: string[];
      shortcuts: Record<string, string>;
    };
    highContrastMode?: boolean;
  };
  i18n: {
    locale: string;
    supportedLocales: string[];
    translations: Record<string, string>;
  };
  appState: {
    // Add other app state fields as needed
    roomTypes: import('./room-type.model').RoomType[];
    rooms: import('./rooms/room.model').Room[];
    lastModified: string;
    version: string;
  };
}
