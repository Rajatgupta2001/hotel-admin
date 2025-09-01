/**
 * Cross-Navigation Configuration for Hotel Admin PWA
 * 
 * This configuration provides related links and contextual navigation
 * for each module to enhance user experience and workflow efficiency.
 */

export interface RelatedLink {
  label: string;
  path: string;
  icon: string;
  description: string;
  category: 'related' | 'workflow' | 'dependency' | 'setup';
}

export interface ModuleCrossNavigation {
  path: string;
  relatedLinks: RelatedLink[];
  workflowSuggestions: RelatedLink[];
  quickActions: RelatedLink[];
}

export interface CrossNavigationConfig {
  modules: Record<string, ModuleCrossNavigation>;
  globalQuickActions: RelatedLink[];
  contextualHelp: Record<string, string>;
}

export const CROSS_NAVIGATION_CONFIG: CrossNavigationConfig = {
  modules: {
    // Dashboard
    '/dashboard': {
      path: '/dashboard',
      relatedLinks: [
        {
          label: 'Hotel Information',
          path: '/company-info/hotel-information',
          icon: 'info',
          description: 'Update basic hotel details and settings',
          category: 'setup'
        },
        {
          label: 'Default Settings',
          path: '/general/default-settings',
          icon: 'settings',
          description: 'Configure system-wide defaults',
          category: 'setup'
        },
        {
          label: 'Room Types & Rooms',
          path: '/rooms-manager/room-types',
          icon: 'home',
          description: 'Manage room inventory and types',
          category: 'setup'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Quick Setup Wizard',
          path: '/general/default-settings',
          icon: 'auto_fix_high',
          description: 'Complete basic hotel setup in one place',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'View Reports',
          path: '/dashboard',
          icon: 'analytics',
          description: 'Access key performance metrics',
          category: 'workflow'
        }
      ]
    },

    // Rooms Manager
    '/rooms-manager/amenities': {
      path: '/rooms-manager/amenities',
      relatedLinks: [
        {
          label: 'Room Types & Rooms',
          path: '/rooms-manager/room-types',
          icon: 'home',
          description: 'Assign amenities to specific room types',
          category: 'workflow'
        },
        {
          label: 'Room Features',
          path: '/rooms-manager/room-features',
          icon: 'tune',
          description: 'Configure additional room features',
          category: 'related'
        },
        {
          label: 'Packages Master',
          path: '/price-manager/packages-master',
          icon: 'card_giftcard',
          description: 'Include amenities in packages',
          category: 'workflow'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Set Up Room Inventory',
          path: '/rooms-manager/room-types',
          icon: 'inventory',
          description: 'After creating amenities, configure room types',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add New Amenity',
          path: '/rooms-manager/amenities',
          icon: 'add',
          description: 'Create new amenity option',
          category: 'workflow'
        }
      ]
    },

    '/rooms-manager/room-types': {
      path: '/rooms-manager/room-types',
      relatedLinks: [
        {
          label: 'Amenities',
          path: '/rooms-manager/amenities',
          icon: 'star',
          description: 'Manage amenities for room types',
          category: 'dependency'
        },
        {
          label: 'Room Prices',
          path: '/price-manager/room-prices',
          icon: 'attach_money',
          description: 'Set pricing for room types',
          category: 'workflow'
        },
        {
          label: 'Room Taxes',
          path: '/rooms-manager/room-taxes',
          icon: 'account_balance',
          description: 'Configure tax settings for rooms',
          category: 'related'
        },
        {
          label: 'Display Colors',
          path: '/rooms-manager/display-colors',
          icon: 'palette',
          description: 'Set visual indicators for room status',
          category: 'setup'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Configure Pricing',
          path: '/price-manager/room-prices',
          icon: 'price_check',
          description: 'Set up room rates after creating room types',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Room Type',
          path: '/rooms-manager/room-types',
          icon: 'add',
          description: 'Create new room type',
          category: 'workflow'
        }
      ]
    },

    '/rooms-manager/blocks': {
      path: '/rooms-manager/blocks',
      relatedLinks: [
        {
          label: 'Floors',
          path: '/rooms-manager/floors',
          icon: 'layers',
          description: 'Organize blocks by floors',
          category: 'related'
        },
        {
          label: 'Property Layout',
          path: '/company-info/property-layout',
          icon: 'map',
          description: 'Visualize hotel layout with blocks',
          category: 'related'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Set Up Floors',
          path: '/rooms-manager/floors',
          icon: 'vertical_align_center',
          description: 'Organize blocks into floor structure',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Block',
          path: '/rooms-manager/blocks',
          icon: 'add',
          description: 'Create new building block',
          category: 'workflow'
        }
      ]
    },

    '/rooms-manager/floors': {
      path: '/rooms-manager/floors',
      relatedLinks: [
        {
          label: 'Blocks',
          path: '/rooms-manager/blocks',
          icon: 'domain',
          description: 'Manage building blocks',
          category: 'dependency'
        },
        {
          label: 'Room Types & Rooms',
          path: '/rooms-manager/room-types',
          icon: 'home',
          description: 'Assign rooms to floors',
          category: 'workflow'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Add Rooms to Floors',
          path: '/rooms-manager/room-types',
          icon: 'add_home',
          description: 'Create rooms on this floor',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Floor',
          path: '/rooms-manager/floors',
          icon: 'add',
          description: 'Create new floor level',
          category: 'workflow'
        }
      ]
    },

    '/rooms-manager/room-taxes': {
      path: '/rooms-manager/room-taxes',
      relatedLinks: [
        {
          label: 'Room Prices',
          path: '/price-manager/room-prices',
          icon: 'attach_money',
          description: 'Taxes are applied to room prices',
          category: 'workflow'
        },
        {
          label: 'Tax Exempt Reasons',
          path: '/general/tax-exempt-reasons',
          icon: 'money_off',
          description: 'Manage tax exemption scenarios',
          category: 'related'
        },
        {
          label: 'Group Tax',
          path: '/price-manager/group-tax',
          icon: 'account_balance',
          description: 'Configure taxes for group bookings',
          category: 'related'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Update Room Prices',
          path: '/price-manager/room-prices',
          icon: 'update',
          description: 'Ensure pricing reflects tax changes',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Tax Rule',
          path: '/rooms-manager/room-taxes',
          icon: 'add',
          description: 'Create new tax configuration',
          category: 'workflow'
        }
      ]
    },

    // POS Manager
    '/pos-manager/pos-points': {
      path: '/pos-manager/pos-points',
      relatedLinks: [
        {
          label: 'POS Items',
          path: '/pos-manager/pos-items',
          icon: 'inventory',
          description: 'Manage items sold at POS points',
          category: 'workflow'
        },
        {
          label: 'POS Taxes',
          path: '/pos-manager/pos-taxes',
          icon: 'receipt',
          description: 'Configure tax settings for POS',
          category: 'related'
        },
        {
          label: 'Kitchen',
          path: '/pos-manager/kitchen',
          icon: 'restaurant',
          description: 'Link POS points to kitchen operations',
          category: 'workflow'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Set Up POS Items',
          path: '/pos-manager/pos-items',
          icon: 'store',
          description: 'Add products for this POS point',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add POS Point',
          path: '/pos-manager/pos-points',
          icon: 'add',
          description: 'Create new point of sale',
          category: 'workflow'
        }
      ]
    },

    '/pos-manager/pos-items': {
      path: '/pos-manager/pos-items',
      relatedLinks: [
        {
          label: 'POS Attributes',
          path: '/pos-manager/pos-attributes',
          icon: 'category',
          description: 'Define item attributes and categories',
          category: 'dependency'
        },
        {
          label: 'Measurement Units',
          path: '/pos-manager/measurement-units',
          icon: 'straighten',
          description: 'Set units for item quantities',
          category: 'dependency'
        },
        {
          label: 'POS Taxes',
          path: '/pos-manager/pos-taxes',
          icon: 'receipt',
          description: 'Apply taxes to items',
          category: 'workflow'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Configure Taxes',
          path: '/pos-manager/pos-taxes',
          icon: 'receipt_long',
          description: 'Set up tax rules for items',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Item',
          path: '/pos-manager/pos-items',
          icon: 'add_shopping_cart',
          description: 'Create new POS item',
          category: 'workflow'
        }
      ]
    },

    // Guest Manager
    '/guest-manager/guest-list': {
      path: '/guest-manager/guest-list',
      relatedLinks: [
        {
          label: 'Guest Preferences',
          path: '/guest-manager/guest-preferences',
          icon: 'tune',
          description: 'Manage individual guest preferences',
          category: 'workflow'
        },
        {
          label: 'Custom Fields',
          path: '/guest-manager/custom-fields',
          icon: 'dynamic_form',
          description: 'Capture additional guest information',
          category: 'related'
        },
        {
          label: 'VIP Guest List',
          path: '/guest-manager/vip-guest-list',
          icon: 'star_border',
          description: 'Promote guests to VIP status',
          category: 'workflow'
        },
        {
          label: 'Trip Reviews',
          path: '/guest-manager/trip-reviews',
          icon: 'rate_review',
          description: 'View guest feedback and reviews',
          category: 'related'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Update Preferences',
          path: '/guest-manager/guest-preferences',
          icon: 'edit',
          description: 'Customize experience for returning guests',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Guest',
          path: '/guest-manager/guest-list',
          icon: 'person_add',
          description: 'Register new guest',
          category: 'workflow'
        }
      ]
    },

    '/guest-manager/salutations': {
      path: '/guest-manager/salutations',
      relatedLinks: [
        {
          label: 'Guest List',
          path: '/guest-manager/guest-list',
          icon: 'people',
          description: 'Salutations are used in guest profiles',
          category: 'workflow'
        },
        {
          label: 'Languages',
          path: '/general/languages',
          icon: 'language',
          description: 'Localize salutations for different languages',
          category: 'related'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Create Guest Profiles',
          path: '/guest-manager/guest-list',
          icon: 'person_add',
          description: 'Start adding guests using these salutations',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Salutation',
          path: '/guest-manager/salutations',
          icon: 'add',
          description: 'Create new title option',
          category: 'workflow'
        }
      ]
    },

    // General Settings
    '/general/default-settings': {
      path: '/general/default-settings',
      relatedLinks: [
        {
          label: 'Hotel Custom Settings',
          path: '/general/hotel-custom-settings',
          icon: 'tune',
          description: 'Override defaults with hotel-specific settings',
          category: 'related'
        },
        {
          label: 'Hotel Information',
          path: '/company-info/hotel-information',
          icon: 'info',
          description: 'Basic hotel details and information',
          category: 'setup'
        },
        {
          label: 'Currencies',
          path: '/general/currencies',
          icon: 'attach_money',
          description: 'Configure supported currencies',
          category: 'dependency'
        },
        {
          label: 'Languages',
          path: '/general/languages',
          icon: 'language',
          description: 'Set up multi-language support',
          category: 'dependency'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Complete Setup',
          path: '/company-info/hotel-information',
          icon: 'task_alt',
          description: 'Finish basic hotel configuration',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Update Settings',
          path: '/general/default-settings',
          icon: 'edit',
          description: 'Modify system defaults',
          category: 'workflow'
        }
      ]
    },

    '/general/currencies': {
      path: '/general/currencies',
      relatedLinks: [
        {
          label: 'Room Prices',
          path: '/price-manager/room-prices',
          icon: 'attach_money',
          description: 'Pricing uses configured currencies',
          category: 'workflow'
        },
        {
          label: 'Default Settings',
          path: '/general/default-settings',
          icon: 'settings',
          description: 'Set default currency for the hotel',
          category: 'dependency'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Update Room Prices',
          path: '/price-manager/room-prices',
          icon: 'price_check',
          description: 'Configure pricing in available currencies',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Currency',
          path: '/general/currencies',
          icon: 'add',
          description: 'Enable new currency option',
          category: 'workflow'
        }
      ]
    },

    '/general/pay-modes': {
      path: '/general/pay-modes',
      relatedLinks: [
        {
          label: 'Pay Types',
          path: '/general/pay-types',
          icon: 'credit_card',
          description: 'Related payment type configurations',
          category: 'related'
        },
        {
          label: 'POS Points',
          path: '/pos-manager/pos-points',
          icon: 'store',
          description: 'Payment modes are used at POS',
          category: 'workflow'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Configure POS Payments',
          path: '/pos-manager/pos-points',
          icon: 'point_of_sale',
          description: 'Enable payment modes at POS points',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add Payment Mode',
          path: '/general/pay-modes',
          icon: 'add',
          description: 'Create new payment option',
          category: 'workflow'
        }
      ]
    },

    // Price Manager
    '/price-manager/room-prices': {
      path: '/price-manager/room-prices',
      relatedLinks: [
        {
          label: 'Room Types & Rooms',
          path: '/rooms-manager/room-types',
          icon: 'home',
          description: 'Pricing is set per room type',
          category: 'dependency'
        },
        {
          label: 'Seasons',
          path: '/price-manager/seasons',
          icon: 'calendar_today',
          description: 'Seasonal pricing adjustments',
          category: 'related'
        },
        {
          label: 'Room Taxes',
          path: '/rooms-manager/room-taxes',
          icon: 'account_balance',
          description: 'Taxes applied to room prices',
          category: 'related'
        },
        {
          label: 'Currencies',
          path: '/general/currencies',
          icon: 'attach_money',
          description: 'Multi-currency pricing support',
          category: 'dependency'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Set Up Seasonal Rates',
          path: '/price-manager/seasons',
          icon: 'event_note',
          description: 'Create seasonal pricing variations',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Update Prices',
          path: '/price-manager/room-prices',
          icon: 'edit',
          description: 'Modify room rate structure',
          category: 'workflow'
        }
      ]
    },

    '/price-manager/packages-master': {
      path: '/price-manager/packages-master',
      relatedLinks: [
        {
          label: 'Add-ons (Inclusions)',
          path: '/price-manager/add-ons',
          icon: 'add_circle',
          description: 'Items included in packages',
          category: 'dependency'
        },
        {
          label: 'Room Types & Rooms',
          path: '/rooms-manager/room-types',
          icon: 'home',
          description: 'Packages are associated with room types',
          category: 'workflow'
        },
        {
          label: 'Amenities',
          path: '/rooms-manager/amenities',
          icon: 'star',
          description: 'Include amenities in packages',
          category: 'related'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Configure Channel Packages',
          path: '/price-manager/web-packages',
          icon: 'web',
          description: 'Set up packages for online channels',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Create Package',
          path: '/price-manager/packages-master',
          icon: 'add',
          description: 'Design new package offering',
          category: 'workflow'
        }
      ]
    },

    // Company Info
    '/company-info/hotel-information': {
      path: '/company-info/hotel-information',
      relatedLinks: [
        {
          label: 'Default Settings',
          path: '/general/default-settings',
          icon: 'settings',
          description: 'System-wide configuration options',
          category: 'related'
        },
        {
          label: 'Property Layout',
          path: '/company-info/property-layout',
          icon: 'map',
          description: 'Visual layout of hotel property',
          category: 'related'
        },
        {
          label: 'Hotel Categories',
          path: '/company-info/hotel-categories',
          icon: 'category',
          description: 'Classify hotel type and amenities',
          category: 'setup'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Configure Rooms',
          path: '/rooms-manager/room-types',
          icon: 'home_work',
          description: 'Set up room inventory after hotel details',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Update Information',
          path: '/company-info/hotel-information',
          icon: 'edit',
          description: 'Modify hotel details',
          category: 'workflow'
        }
      ]
    },

    // Users Manager
    '/users-manager/users': {
      path: '/users-manager/users',
      relatedLinks: [
        {
          label: 'User Levels',
          path: '/users-manager/user-levels',
          icon: 'security',
          description: 'Permission levels for users',
          category: 'dependency'
        },
        {
          label: 'Login Activity',
          path: '/users-manager/login-activity',
          icon: 'history',
          description: 'Monitor user access patterns',
          category: 'related'
        },
        {
          label: 'Departments',
          path: '/general/departments',
          icon: 'business',
          description: 'Assign users to departments',
          category: 'workflow'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Set Permissions',
          path: '/users-manager/user-levels',
          icon: 'admin_panel_settings',
          description: 'Configure access levels for new users',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add User',
          path: '/users-manager/users',
          icon: 'person_add',
          description: 'Create new user account',
          category: 'workflow'
        }
      ]
    },

    '/users-manager/user-levels': {
      path: '/users-manager/user-levels',
      relatedLinks: [
        {
          label: 'Users',
          path: '/users-manager/users',
          icon: 'people',
          description: 'Assign levels to user accounts',
          category: 'workflow'
        },
        {
          label: 'Login Activity',
          path: '/users-manager/login-activity',
          icon: 'history',
          description: 'Monitor access by permission level',
          category: 'related'
        }
      ],
      workflowSuggestions: [
        {
          label: 'Create Users',
          path: '/users-manager/users',
          icon: 'group_add',
          description: 'Add users with these permission levels',
          category: 'workflow'
        }
      ],
      quickActions: [
        {
          label: 'Add User Level',
          path: '/users-manager/user-levels',
          icon: 'add',
          description: 'Create new permission level',
          category: 'workflow'
        }
      ]
    }
  },

  globalQuickActions: [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'dashboard',
      description: 'Return to main dashboard',
      category: 'workflow'
    },
    {
      label: 'Search Settings',
      path: '/general/default-settings',
      icon: 'search',
      description: 'Find configuration options',
      category: 'workflow'
    },
    {
      label: 'Hotel Information',
      path: '/company-info/hotel-information',
      icon: 'info',
      description: 'View hotel details',
      category: 'workflow'
    },
    {
      label: 'Backup & Restore',
      path: '/general/backup-restore',
      icon: 'backup',
      description: 'Backup or restore data',
      category: 'workflow'
    }
  ],

  contextualHelp: {
    '/dashboard': 'Your main control center. Use related links to quickly access key setup areas or view operational data.',
    '/rooms-manager': 'Configure your hotel\'s physical layout and room inventory. Start with amenities and progress to room types.',
    '/pos-manager': 'Set up point-of-sale operations. Begin with POS points, then add items and configure taxes.',
    '/guest-manager': 'Manage guest information and preferences. Start with basic data like salutations, then build guest profiles.',
    '/general': 'System-wide settings and configurations. These affect all other modules - set up carefully.',
    '/price-manager': 'Revenue and pricing controls. Room prices depend on room types, while packages enhance value.',
    '/company-info': 'Basic hotel identity and information. Complete this before detailed configurations.',
    '/users-manager': 'User access and security. Create user levels first, then assign them to users.',
    '/console': 'Advanced integrations and corporate relationships for enterprise features.'
  }
};

/**
 * Get cross-navigation configuration for a specific path
 */
export function getCrossNavigationForPath(path: string): ModuleCrossNavigation | null {
  // Find exact match first
  if (CROSS_NAVIGATION_CONFIG.modules[path]) {
    return CROSS_NAVIGATION_CONFIG.modules[path];
  }

  // Find partial match for nested routes
  const matchingPath = Object.keys(CROSS_NAVIGATION_CONFIG.modules).find(modulePath => 
    path.startsWith(modulePath)
  );

  return matchingPath ? CROSS_NAVIGATION_CONFIG.modules[matchingPath] : null;
}

/**
 * Get contextual help text for a path
 */
export function getContextualHelp(path: string): string {
  // Check for exact match
  if (CROSS_NAVIGATION_CONFIG.contextualHelp[path]) {
    return CROSS_NAVIGATION_CONFIG.contextualHelp[path];
  }

  // Find partial match for module-level help
  const helpKey = Object.keys(CROSS_NAVIGATION_CONFIG.contextualHelp).find(key => 
    path.startsWith(key)
  );

  return helpKey ? CROSS_NAVIGATION_CONFIG.contextualHelp[helpKey] : 
    'Navigate using the related links to find connected features and settings.';
}

/**
 * Single JSON object for localStorage storage
 */
export const CROSS_NAVIGATION_STORAGE = {
  version: '1.0.0',
  lastUpdated: '2025-08-28T10:00:00.000Z',
  config: CROSS_NAVIGATION_CONFIG,
  metadata: {
    totalModules: Object.keys(CROSS_NAVIGATION_CONFIG.modules).length,
    totalRelatedLinks: Object.values(CROSS_NAVIGATION_CONFIG.modules)
      .reduce((sum, module) => sum + module.relatedLinks.length, 0),
    globalActions: CROSS_NAVIGATION_CONFIG.globalQuickActions.length,
    helpEntries: Object.keys(CROSS_NAVIGATION_CONFIG.contextualHelp).length
  }
};
