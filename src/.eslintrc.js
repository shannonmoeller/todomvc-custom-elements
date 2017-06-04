module.exports = {
	rules: {
		'require-jsdoc': ["error", {
			require: {
				FunctionDeclaration: true,
				MethodDefinition: false,
				ClassDeclaration: false,
				ArrowFunctionExpression: false,
			},
		}],
		'valid-jsdoc': ['error', {
			prefer: {
				arg: 'param',
				argument: 'param',
				returns: 'return',
				virtual: 'abstract',
			},
			preferType: {
				array: 'Array',
				bool: 'Boolean',
				boolean: 'Boolean',
				number: 'Number',
				object: 'Object',
				string: 'String',
			},
			requireParamDescription: false,
			requireReturn: false,
			requireReturnDescription: false,
			requireReturnType: true,
		}],
	}
};
