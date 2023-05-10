const config = require('config').get('swagger-server');

module.exports = {
    '/department/add': {
        post: {
            tags: ["Department API's"],
            description: 'This API is used to save the department information.',
            content: 'req.body',
            required: true,
            servers: [{
                url: `${config.get('url')}/api`,
                description: config.get('serverName')
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            properties: {
                                department_name: {
                                    description: 'Department name',
                                    type: 'string',
                                    format: 'string',
                                    required: true,
                                    example: 'IT'
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'success',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Success'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Department created successfully.'
                                    }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Something went wrong.'
                                    }
                                }
                            }
                        }
                    }
                },
                404: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Requisted URL not found.'
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: false
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Department already exists.'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/department/list': {
        get: {
            tags: ["Department API's"],
            description: 'This API is used to list the department imformation.',
            produces: ['application/json'],
            servers: [{
                url: `${config.get('url')}/api`,
                description: config.get('serverName')
            }],
            parameters: [],
            responses: {
                200: {
                    description: 'success',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Success'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'The department records.'
                                    },
                                    data: {
                                        type: 'array',
                                        example: [{
                                            id: "645b67844efb5e2b2381bb62",
                                            department_name: "IT"
                                        }]
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'No department found.'
                                    }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Something went wrong.'
                                    }
                                }
                            }
                        }
                    }
                },
                404: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Requisted URL not found.'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/employee/add': {
        post: {
            tags: ["Employee API's"],
            description: 'This API is used to save the department information.',
            content: 'req.body',
            required: true,
            servers: [{
                url: `${config.get('url')}/api`,
                description: config.get('serverName')
            }],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            properties: {
                                first_name: {
                                    description: 'Employee first name',
                                    type: 'string',
                                    format: 'string',
                                    required: true,
                                    example: 'mohan'
                                },
                                last_name: {
                                    description: 'Employee last name',
                                    type: 'string',
                                    format: 'string',
                                    required: true,
                                    example: 'rana'
                                },
                                email_address: {
                                    description: 'Employee email name',
                                    type: 'string',
                                    format: 'string',
                                    required: true,
                                    example: 'employee@gmail.com'
                                },
                                department_id: {
                                    description: 'Department ID',
                                    type: 'string',
                                    format: 'string',
                                    required: true,
                                    example: '645b67844efb5e2b2381bb62'
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'success',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Success'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Employee record saved successfully.'
                                    }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Something went wrong.'
                                    }
                                }
                            }
                        }
                    }
                },
                404: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Requisted URL not found.'
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: false
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Employee already exists.'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/employee/list': {
        get: {
            tags: ["Employee API's"],
            description: 'This API is used to list the employee imformation.',
            produces: ['application/json'],
            servers: [{
                url: `${config.get('url')}/api`,
                description: config.get('serverName')
            }],
            parameters: [
                {
                    name: 'first_name',
                    in: 'query',
                    description: 'Employee first name.',
                    required: false,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    name: 'last_name',
                    in: 'query',
                    description: 'Employee last name.',
                    required: false,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    name: 'email_address',
                    in: 'query',
                    description: 'Employee E-mail address.',
                    required: false,
                    schema: {
                        type: 'string'
                    }
                }
            ],
            responses: {
                200: {
                    description: 'success',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Success'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'The employee records.'
                                    },
                                    data: {
                                        type: 'array',
                                        example: [{
                                            employee_id: "645b70b024d74ca46ca08312",
                                            first_name: "Mohan",
                                            last_name: "Rana",
                                            email_address: "mohanrana@gmail.com",
                                            department_id: "645b67844efb5e2b2381bb62",
                                            department_name: "IT"
                                        }]
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'No department found.'
                                    }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Something went wrong.'
                                    }
                                }
                            }
                        }
                    }
                },
                404: {
                    description: 'failed',
                    content: {
                        'applicaton/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'Failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Requisted URL not found.'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};