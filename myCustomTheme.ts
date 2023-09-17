import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': 'var(--color-secondary-900)',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '4px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-secondary-900)',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': 'var(--color-secondary-900)',
		// =~= Theme Colors  =~=
		// primary | #00d18b
		'--color-primary-50': '217 248 238', // #d9f8ee
		'--color-primary-100': '204 246 232', // #ccf6e8
		'--color-primary-200': '191 244 226', // #bff4e2
		'--color-primary-300': '153 237 209', // #99edd1
		'--color-primary-400': '77 223 174', // #4ddfae
		'--color-primary-500': '0 209 139', // #00d18b
		'--color-primary-600': '0 188 125', // #00bc7d
		'--color-primary-700': '0 157 104', // #009d68
		'--color-primary-800': '0 125 83', // #007d53
		'--color-primary-900': '0 102 68', // #006644
		// secondary | #050052
		'--color-secondary-50': '218 217 229', // #dad9e5
		'--color-secondary-100': '205 204 220', // #cdccdc
		'--color-secondary-200': '193 191 212', // #c1bfd4
		'--color-secondary-300': '155 153 186', // #9b99ba
		'--color-secondary-400': '80 77 134', // #504d86
		'--color-secondary-500': '5 0 82', // #050052
		'--color-secondary-600': '5 0 74', // #05004a
		'--color-secondary-700': '4 0 62', // #04003e
		'--color-secondary-800': '3 0 49', // #030031
		'--color-secondary-900': '2 0 40', // #020028
		// tertiary | #0ca6ed
		'--color-tertiary-50': '219 242 252', // #dbf2fc
		'--color-tertiary-100': '206 237 251', // #ceedfb
		'--color-tertiary-200': '194 233 251', // #c2e9fb
		'--color-tertiary-300': '158 219 248', // #9edbf8
		'--color-tertiary-400': '85 193 242', // #55c1f2
		'--color-tertiary-500': '12 166 237', // #0ca6ed
		'--color-tertiary-600': '11 149 213', // #0b95d5
		'--color-tertiary-700': '9 125 178', // #097db2
		'--color-tertiary-800': '7 100 142', // #07648e
		'--color-tertiary-900': '6 81 116', // #065174
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #ffffff
		'--color-surface-50': '255 255 255', // #ffffff
		'--color-surface-100': '255 255 255', // #ffffff
		'--color-surface-200': '255 255 255', // #ffffff
		'--color-surface-300': '255 255 255', // #ffffff
		'--color-surface-400': '255 255 255', // #ffffff
		'--color-surface-500': '255 255 255', // #ffffff
		'--color-surface-600': '230 230 230', // #e6e6e6
		'--color-surface-700': '191 191 191', // #bfbfbf
		'--color-surface-800': '153 153 153', // #999999
		'--color-surface-900': '125 125 125' // #7d7d7d
	}
};
