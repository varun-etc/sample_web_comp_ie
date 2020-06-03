/*
module.exports = {
    presets: [
        '@babel/preset-env',
    ],
    plugins: [
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
        '@babel/plugin-proposal-class-properties',
        [
            '@babel/plugin-transform-runtime',
            {
                regenerator: true,
            },
        ],
    ],
};*/



module.exports = function (api) {
	console.log("babel.config log !!!");
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
		    targets: {
      ie: 11
    }, 
        modules: false,
        useBuiltIns: 'usage'
      }
    ]
  ];
  
  const plugins= [
    [
      '@babel/plugin-transform-runtime', {
      corejs: 2,
      helpers: true,
      regenerator: true,
      useESModules: false
    }
    ]
  ];
  /*
	const plugins=[	  
	'@babel/plugin-proposal-class-properties',
	'@babel/plugin-transform-shorthand-properties'
	];	*/  
	/*
const plugins=[
        '@babel/plugin-syntax-dynamic-import',
        [
          '@babel/plugin-transform-runtime',
          {
			corejs: 2,
			helpers: true,
			regenerator: true,  
            useESModules: false
          }
        ]
      ];
		*/			
  return {
    presets,
    plugins
  }
}