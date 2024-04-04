[2024 - 02 - 03 T01: 01: 52.063871 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Requisição Script(REMOVE PONTOS E TRAÇOS) => URL(https: //gcp-fortics-sz4.uc.r.appspot.com/run) | Headers {"json":{"params":[{"arg":"cpf_cnpj","value":"288.557.959-53"}],"function":"\n cpf_cnpj = cpf_cnpj.replace(\/[^\\d]\/g, \"\")\n return cpf_cnpj ;\n "},"http_errors":false,"proxy":{"http":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900","https":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900"}} {"name":"Wesley Freitas","session_id":"65bd90773278afc9f109ceab","platform":"WhatsappBusiness","platform_id":"5585996310234","contact_id":"65bd892b9f5af18802008687","channel_id":"659f09c25a9b7f001782bdbf","protocol":"2024020200019","hostname":"laravel-596cbd575b-n2dxn","client_id":"657af8a4f31fb3545b0c7a4a","host":"deps.uppchannel.com.br"} {"ip":"10.108.12.4","endpoint":"/client/message/send"}
        [2024 - 02 - 03 T01: 01: 52.103164 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Resposta da execução do Script => {
                "success": true,
                "result": "28855795953"
            } {
                "name": "Wesley Freitas",
                "session_id": "65bd90773278afc9f109ceab",
                "platform": "WhatsappBusiness",
                "platform_id": "5585996310234",
                "contact_id": "65bd892b9f5af18802008687",
                "channel_id": "659f09c25a9b7f001782bdbf",
                "protocol": "2024020200019",
                "hostname": "laravel-596cbd575b-n2dxn",
                "client_id": "657af8a4f31fb3545b0c7a4a",
                "host": "deps.uppchannel.com.br"
            } {
                "ip": "10.108.12.4",
                "endpoint": "/client/message/send"
            }
            [2024 - 02 - 03 T01: 01: 52.125735 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Script' {
                "client_id": "657af8a4f31fb3545b0c7a4a",
                "host": "deps.uppchannel.com.br"
            } {
                "ip": "10.108.12.4",
                "endpoint": "/client/message/send"
            }
            [2024 - 02 - 03 T01: 01: 52.127579 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Requisição Script(Conta caracteres) => URL(https: //gcp-fortics-sz4.uc.r.appspot.com/run) | Headers {"json":{"params":[{"arg":"cpf_cnpj","value":"28855795953"}],"function":"\n return cpf_cnpj.length;\n"},"http_errors":false,"proxy":{"http":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900","https":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900"}} {"name":"Wesley Freitas","session_id":"65bd90773278afc9f109ceab","platform":"WhatsappBusiness","platform_id":"5585996310234","contact_id":"65bd892b9f5af18802008687","channel_id":"659f09c25a9b7f001782bdbf","protocol":"2024020200019","hostname":"laravel-596cbd575b-n2dxn","client_id":"657af8a4f31fb3545b0c7a4a","host":"deps.uppchannel.com.br"} {"ip":"10.108.12.4","endpoint":"/client/message/send"}
                [2024 - 02 - 03 T01: 01: 52.158635 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Resposta da execução do Script => {
                        "success": true,
                        "result": 11
                    } {
                        "name": "Wesley Freitas",
                        "session_id": "65bd90773278afc9f109ceab",
                        "platform": "WhatsappBusiness",
                        "platform_id": "5585996310234",
                        "contact_id": "65bd892b9f5af18802008687",
                        "channel_id": "659f09c25a9b7f001782bdbf",
                        "protocol": "2024020200019",
                        "hostname": "laravel-596cbd575b-n2dxn",
                        "client_id": "657af8a4f31fb3545b0c7a4a",
                        "host": "deps.uppchannel.com.br"
                    } {
                        "ip": "10.108.12.4",
                        "endpoint": "/client/message/send"
                    }
                    [2024 - 02 - 03 T01: 01: 52.173628 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Condition' {
                        "client_id": "657af8a4f31fb3545b0c7a4a",
                        "host": "deps.uppchannel.com.br"
                    } {
                        "ip": "10.108.12.4",
                        "endpoint": "/client/message/send"
                    }
                    [2024 - 02 - 03 T01: 01: 52.175560 + 00: 00] components.DEBUG: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Valor de 'CNPJ_COUNT'
                é '11' {
                    "name": "Wesley Freitas",
                    "session_id": "65bd90773278afc9f109ceab",
                    "platform": "WhatsappBusiness",
                    "platform_id": "5585996310234",
                    "contact_id": "65bd892b9f5af18802008687",
                    "channel_id": "659f09c25a9b7f001782bdbf",
                    "protocol": "2024020200019",
                    "hostname": "laravel-596cbd575b-n2dxn",
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.175704 + 00: 00]
                components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Encontrou uma opção, indo para grupo: '7fa01c49' {
                    "name": "Wesley Freitas",
                    "session_id": "65bd90773278afc9f109ceab",
                    "platform": "WhatsappBusiness",
                    "platform_id": "5585996310234",
                    "contact_id": "65bd892b9f5af18802008687",
                    "channel_id": "659f09c25a9b7f001782bdbf",
                    "protocol": "2024020200019",
                    "hostname": "laravel-596cbd575b-n2dxn",
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.185438 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ SetGoto] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\SetGoto' {
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.185624 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ SetGoto] Ir para '9dbee515' {
                    "name": "Wesley Freitas",
                    "session_id": "65bd90773278afc9f109ceab",
                    "platform": "WhatsappBusiness",
                    "platform_id": "5585996310234",
                    "contact_id": "65bd892b9f5af18802008687",
                    "channel_id": "659f09c25a9b7f001782bdbf",
                    "protocol": "2024020200019",
                    "hostname": "laravel-596cbd575b-n2dxn",
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.198960 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Anchor' {
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.199122 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Ancora: '1 - cpf'.Vai para próxima opção {
                    "name": "Wesley Freitas",
                    "session_id": "65bd90773278afc9f109ceab",
                    "platform": "WhatsappBusiness",
                    "platform_id": "5585996310234",
                    "contact_id": "65bd892b9f5af18802008687",
                    "channel_id": "659f09c25a9b7f001782bdbf",
                    "protocol": "2024020200019",
                    "hostname": "laravel-596cbd575b-n2dxn",
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.204562 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ SetValue] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\SetValue' {
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.204719 + 00: 00] components.DEBUG: [Smartzap\ Http\ Controllers\ Client\ Components\ SetValue] Setando valor 'F'
                para o atributo 'TIPO_PESSOA' {
                    "name": "Wesley Freitas",
                    "session_id": "65bd90773278afc9f109ceab",
                    "platform": "WhatsappBusiness",
                    "platform_id": "5585996310234",
                    "contact_id": "65bd892b9f5af18802008687",
                    "channel_id": "659f09c25a9b7f001782bdbf",
                    "protocol": "2024020200019",
                    "hostname": "laravel-596cbd575b-n2dxn",
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.218009 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Script' {
                    "client_id": "657af8a4f31fb3545b0c7a4a",
                    "host": "deps.uppchannel.com.br"
                } {
                    "ip": "10.108.12.4",
                    "endpoint": "/client/message/send"
                }
                [2024 - 02 - 03 T01: 01: 52.221516 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Requisição Script(IDENTIFICADOR_PRODUTO) => URL(https: //gcp-fortics-sz4.uc.r.appspot.com/run) | Headers {"json":{"params":[{"arg":"data","value":"[{\"identificador\":\"A6D9B195\",\"nome\":\"Smart PF 001\",\"tipoPessoa\":\"F\"},{\"identificador\":\"F36E237E\",\"nome\":\"Smart PJ 007\",\"tipoPessoa\":\"J\"}]"},{"arg":"tipo","value":"F"}],"function":"\ndata = JSON.parse(data);\nreturn data.filter( (e) => {\n if (e.tipoPessoa == tipo) {\n return e;\n }\n})[0].identificador\n"},"http_errors":false,"proxy":{"http":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900","https":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900"}} {"name":"Wesley Freitas","session_id":"65bd90773278afc9f109ceab","platform":"WhatsappBusiness","platform_id":"5585996310234","contact_id":"65bd892b9f5af18802008687","channel_id":"659f09c25a9b7f001782bdbf","protocol":"2024020200019","hostname":"laravel-596cbd575b-n2dxn","client_id":"657af8a4f31fb3545b0c7a4a","host":"deps.uppchannel.com.br"} {"ip":"10.108.12.4","endpoint":"/client/message/send"}
                    [2024 - 02 - 03 T01: 01: 52.251780 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Resposta da execução do Script => {
                            "success": true,
                            "result": "A6D9B195"
                        } {
                            "name": "Wesley Freitas",
                            "session_id": "65bd90773278afc9f109ceab",
                            "platform": "WhatsappBusiness",
                            "platform_id": "5585996310234",
                            "contact_id": "65bd892b9f5af18802008687",
                            "channel_id": "659f09c25a9b7f001782bdbf",
                            "protocol": "2024020200019",
                            "hostname": "laravel-596cbd575b-n2dxn",
                            "client_id": "657af8a4f31fb3545b0c7a4a",
                            "host": "deps.uppchannel.com.br"
                        } {
                            "ip": "10.108.12.4",
                            "endpoint": "/client/message/send"
                        }
                        [2024 - 02 - 03 T01: 01: 52.264623 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Anchor' {
                            "client_id": "657af8a4f31fb3545b0c7a4a",
                            "host": "deps.uppchannel.com.br"
                        } {
                            "ip": "10.108.12.4",
                            "endpoint": "/client/message/send"
                        }
                        [2024 - 02 - 03 T01: 01: 52.264755 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Ancora: 'pós limite'.Vai para próxima opção {
                            "name": "Wesley Freitas",
                            "session_id": "65bd90773278afc9f109ceab",
                            "platform": "WhatsappBusiness",
                            "platform_id": "5585996310234",
                            "contact_id": "65bd892b9f5af18802008687",
                            "channel_id": "659f09c25a9b7f001782bdbf",
                            "protocol": "2024020200019",
                            "hostname": "laravel-596cbd575b-n2dxn",
                            "client_id": "657af8a4f31fb3545b0c7a4a",
                            "host": "deps.uppchannel.com.br"
                        } {
                            "ip": "10.108.12.4",
                            "endpoint": "/client/message/send"
                        }
                        [2024 - 02 - 03 T01: 01: 52.270242 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ RPA] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\RPA' {
                            "client_id": "657af8a4f31fb3545b0c7a4a",
                            "host": "deps.uppchannel.com.br"
                        } {
                            "ip": "10.108.12.4",
                            "endpoint": "/client/message/send"
                        }
                        [2024 - 02 - 03 T01: 01: 52.274514 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ RPA] Requisição Rest(CONSULTA MIX - PF) => URL(https: //api-portal.deps.com.br/api/v3/consultas/depsmix?documento=28855795953&identificadorProduto=A6D9B195&version=2&reutilizarDadosExistentes=true&limiterequisitado=0) | Headers {"form_params":[],"headers":{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYWEyZTQ2NS1iNDk3LTQxOWItODMwMC00MGU4ZmQzMzlmZGUiLCJlbWFpbCI6ImtzYW1wYWlvMTk5OEBnbWFpbC5jb20iLCJqdGkiOiJiNjhkZjFkMy00YjI0LTQyNTktYTJlNC04ZTVhNzgxMWYyNDMiLCJpYXQiOjE3MDY5MjIwNDksImNsaWVudGVpZCI6Ijg3MDlkNzFhLTNmODgtNGQ4Zi04NmZjLTFkMDc4YmE4MTRiNCIsImNsaWVudGVkb2N1bWVudG8iOiIzNTIwOTg0MzAwMDE4NyIsIm5vbWV1c3VhcmlvIjoiS0FUSExFRU4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDb21lcmNpYWwgZG8gY2xpZW50ZSIsInByb2R1dG9zIjpbIlNtYXJ0IFBGIDAwMSIsIlNtYXJ0IFBKIDAwNyJdLCJuYmYiOjE3MDY5MjIwNDgsImV4cCI6MTcwNzAwODQ0OCwiaXNzIjoiUG9ydGFsV2l0Y3JlZFRva2VuU2VydmVyIiwiYXVkIjoicG9ydGFsLmRlcHMuY29tLmJyIn0.bCrBfEwCVzoBrTMXBLcyWYuvF1rAfkm5c2-Vd_E0fm4"},"http_errors":false,"timeout":60,"verify":false} {"name":"Wesley Freitas","session_id":"65bd90773278afc9f109ceab","platform":"WhatsappBusiness","platform_id":"5585996310234","contact_id":"65bd892b9f5af18802008687","channel_id":"659f09c25a9b7f001782bdbf","protocol":"2024020200019","hostname":"laravel-596cbd575b-n2dxn","client_id":"657af8a4f31fb3545b0c7a4a","host":"deps.uppchannel.com.br"} {"ip":"10.108.12.4","endpoint":"/client/message/send"}
                            [2024 - 02 - 03 T01: 01: 53.057945 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ RPA] Resposta do Rest => {
                                    "mix": {
                                        "consultante": "UPP TECNOLOGIA LTDA",
                                        "produto": "Smart PF 001",
                                        "dataConsulta": "2024-02-02T22:01:52.9486456-03:00",
                                        "versaoProduto": null,
                                        "versao": "3",
                                        "isParcial": false,
                                        "usuario": "KATHLEEN",
                                        "blocosComErros": [],
                                        "linkCompartilhamento": "https:\/\/portal.deps.com.br\/consulta-compartilhada?id=d7cbce27-b19a-4a99-90f5-c0065cc8784c&token=6fdc711f-61ab-443b-a0b3-56c28d6a6f72",
                                        "historicoConsultaId": "d7cbce27-b19a-4a99-90f5-c0065cc8784c",
                                        "empresa": null,
                                        "pessoa": {
                                            "success": true,
                                            "message": null,
                                            "data": {
                                                "cpf": "28855795953",
                                                "nome": "MARIA SALETE NEGRI",
                                                "identidade": "5119847",
                                                "nomeMae": "CARMINDE PIGNATEL NEGRI",
                                                "idade": 68,
                                                "situacaoCadastral": "REGULAR",
                                                "dataNascimento": "1955-08-28T00:00:00-03:00",
                                                "rendaPresumida": null,
                                                "mensagemErroRendaPresumida": null,
                                                "escolaridade": "EDUCACAO SUPERIOR COMPLETA",
                                                "nacionalidade": "BRASILEIRO",
                                                "dataInscricao": "anterior a 10\/11\/1990",
                                                "dataHoraReceita": "2024-02-02T15:20:25-03:00",
                                                "codigoControleReceita": "BB92.FB21.8844.F662",
                                                "dadosCadastrais": {
                                                    "uf": "SC",
                                                    "cidade": "TUBARAO",
                                                    "complemento": "",
                                                    "endereco": "R MANOEL LUZIDERO ALVES",
                                                    "numero": "153",
                                                    "bairro": "MTE CASTELO",
                                                    "cep": "88702502"
                                                },
                                                "obito": null,
                                                "politicamenteExposta": null
                                            }
                                        },
                                        "faturamentoPresumido": null,
                                        "restricoesCheques": {
                                            "possuiInformacao": true,
                                            "alertas": {
                                                "success": true,
                                                "message": "Nada consta.",
                                                "data": null
                                            },
                                            "chequesDevolvidosSemFundo": {
                                                "success": true,
                                                "message": "Nada consta.",
                                                "data": null
                                            },
                                            "chequesDevolvidosOutrosMotivos": {
                                                "success": true,
                                                "message": "Nada consta.",
                                                "data": null
                                            },
                                            "chequesSustados": null,
                                            "chequesDevolvidosInformadosUsuario": null
                                        },
                                        "pendenciasRestricoes": {
                                            "success": true,
                                            "message": "Nada consta.",
                                            "data": null
                                        },
                                        "acoesJudiciais": {
                                            "success": true,
                                            "message": "Nada consta.",
                                            "data": null
                                        },
                                        "falenciasRecuperacaoJudicial": null,
                                        "restricao": null,
                                        "quadroSocietario": null,
                                        "contatosPreferenciais": {
                                            "success": true,
                                            "message": null,
                                            "data": [{
                                                "whatsapp": null,
                                                "telefone": "48110419668",
                                                "documento": "28855795953",
                                                "nome": "MARIA SALETE NEGRI",
                                                "operadora": "OI",
                                                "procon": "(NAO TEM)",
                                                "cidade": "TUBARAO",
                                                "uf": "SC",
                                                "bairro": "MONTE CASTELO",
                                                "rua": "R MANOEL LUZIDERO ALVES",
                                                "numero": "",
                                                "complemento": ""
                                            }, {
                                                "whatsapp": null,
                                                "telefone": "4836222055",
                                                "documento": "28855795953",
                                                "nome": "MARIA SALETE NEGRI",
                                                "operadora": "OI",
                                                "procon": "(NAO TEM)",
                                                "cidade": "TUBARAO",
                                                "uf": "SC",
                                                "bairro": "MONTE CASTELO",
                                                "rua": "R MANOEL LUZIDERO ALVES",
                                                "numero": "",
                                                "complemento": ""
                                            }, {
                                                "whatsapp": true,
                                                "telefone": "48996016734",
                                                "documento": "28855795953",
                                                "nome": "MARIA SALETE NEGRI",
                                                "operadora": "TIM",
                                                "procon": "(NAO TEM)",
                                                "cidade": "TUBARAO",
                                                "uf": "SC",
                                                "bairro": "OFICINAS",
                                                "rua": "R MANOEL LUZIDERO ALVES",
                                                "numero": "153",
                                                "complemento": ""
                                            }, {
                                                "whatsapp": true,
                                                "telefone": "48999690648",
                                                "documento": "28855795953",
                                                "nome": "MARIA SALETE NEGRI",
                                                "operadora": "TIM",
                                                "procon": "(NAO TEM)",
                                                "cidade": "TUBARAO",
                                                "uf": "SC",
                                                "bairro": "MTE CASTELO",
                                                "rua": "R MANOEL LUZIDERO ALVES",
                                                "numero": "153",
                                                "complemento": ""
                                            }, {
                                                "whatsapp": null,
                                                "telefone": "4862220555",
                                                "documento": null,
                                                "nome": null,
                                                "operadora": null,
                                                "procon": null,
                                                "cidade": null,
                                                "uf": null,
                                                "bairro": null,
                                                "rua": null,
                                                "numero": null,
                                                "complemento": null
                                            }]
                                        },
                                        "participacaoEmpresa": {
                                            "success": true,
                                            "message": "Sem informa\u00e7\u00e3o.",
                                            "data": null
                                        },
                                        "vinculoEmpregaticio": {
                                            "success": true,
                                            "message": null,
                                            "data": {
                                                "cbo": "239410",
                                                "descricaoFuncao": "ORIENTADOR EDUCACIONAL",
                                                "dataAdmissao": "1982-02-03T00:00:00-03:00",
                                                "pis": "10088386462",
                                                "rendaEstimada": 1375.33
                                            }
                                        },
                                        "protestos": {
                                            "success": true,
                                            "message": "Nada consta.",
                                            "data": null
                                        },
                                        "emails": {
                                            "success": true,
                                            "message": "Sem informa\u00e7\u00e3o.",
                                            "data": null
                                        },
                                        "sintegra": null,
                                        "suframa": null,
                                        "outrosEnderecos": {
                                            "success": true,
                                            "message": null,
                                            "data": [{
                                                "endereco": "RUA MANOEL LUZIDERIO ALVES",
                                                "numero": "153",
                                                "complemento": "CS",
                                                "cep": "88702-045",
                                                "uf": "SC",
                                                "municipio": "TUBARAO",
                                                "bairro": "OFICINAS"
                                            }, {
                                                "endereco": "RUA MANOEL LUZIDERO ALVES",
                                                "numero": "153",
                                                "complemento": null,
                                                "cep": "88702-502",
                                                "uf": "SC",
                                                "municipio": "TUBARAO",
                                                "bairro": "MONTE CASTELO"
                                            }, {
                                                "endereco": "ESTRADA GERAL",
                                                "numero": "SN",
                                                "complemento": null,
                                                "cep": "88720-000",
                                                "uf": "SC",
                                                "municipio": "PEDRAS GRANDES",
                                                "bairro": "RIO CORAL"
                                            }, {
                                                "endereco": "AVENIDA SANTA CATARINA",
                                                "numero": "1589",
                                                "complemento": "CS",
                                                "cep": "88780-000",
                                                "uf": "SC",
                                                "municipio": "IMBITUBA",
                                                "bairro": "PAES LEME"
                                            }, {
                                                "endereco": "ESTRADA RIO CORAL",
                                                "numero": "SN",
                                                "complemento": "CS",
                                                "cep": "88720-000",
                                                "uf": "SC",
                                                "municipio": "PEDRAS GRANDES",
                                                "bairro": "RIO CORAL"
                                            }, {
                                                "endereco": "RUA ESTRADA GERAL",
                                                "numero": "SN",
                                                "complemento": null,
                                                "cep": "88720-000",
                                                "uf": "SC",
                                                "municipio": "PEDRAS GRANDES",
                                                "bairro": "RIO CORAL"
                                            }, {
                                                "endereco": "RUA IDA ZANETA",
                                                "numero": "123",
                                                "complemento": null,
                                                "cep": "88720-970",
                                                "uf": "SC",
                                                "municipio": "PEDRAS GRANDES",
                                                "bairro": "CENTRO"
                                            }]
                                        },
                                        "score": {
                                            "success": true,
                                            "message": null,
                                            "data": {
                                                "score": 940,
                                                "motivos": null,
                                                "risco": "Baixo",
                                                "descricao": "Capacidade de pagamento maior do que a m\u00e9dia da popula\u00e7\u00e3o brasileira.",
                                                "probabilidadePagamento": 98,
                                                "descricaoPagamento": "A chance deste consumidor n\u00e3o pagar nos pr\u00f3ximos meses \u00e9 de 2%."
                                            }
                                        },
                                        "consultas": {
                                            "success": true,
                                            "message": null,
                                            "data": {
                                                "contagemUltimos15Dias": null,
                                                "contagemUltimos30Dias": 0,
                                                "contagemUltimos31a60Dias": 0,
                                                "contagemUltimos61a90Dias": 0,
                                                "contagem90DiasMais": 2,
                                                "detalhes": [{
                                                    "dataConsulta": "2023-06-02T00:00:00-03:00",
                                                    "quantidadeConsultas": 1,
                                                    "segmento": "Servi\u00e7os"
                                                }, {
                                                    "dataConsulta": "2023-03-13T00:00:00-03:00",
                                                    "quantidadeConsultas": 1,
                                                    "segmento": "0"
                                                }]
                                            }
                                        },
                                        "indicadores": null,
                                        "scr": null,
                                        "rendaPresumida": {
                                            "success": true,
                                            "message": null,
                                            "data": {
                                                "rendaPresumida": "At\u00e9 R$ 1.500,00",
                                                "valorMinimo": 1,
                                                "valorMaximo": 1500,
                                                "valor": 1375.33,
                                                "possuiGastoEstimado": false,
                                                "gastoEstimado": null
                                            }
                                        },
                                        "analiseRisco": null,
                                        "smart": {
                                            "success": false,
                                            "message": "Error reading JObject from JsonReader. Path '', line 0, position 0.",
                                            "data": null
                                        },
                                        "relacaoEmpresaParticipacaoSocio": null,
                                        "grupoComponentes": null,
                                        "isGrupo": false
                                    },
                                    "consultasComplementares": []
                                } {
                                    "name": "Wesley Freitas",
                                    "session_id": "65bd90773278afc9f109ceab",
                                    "platform": "WhatsappBusiness",
                                    "platform_id": "5585996310234",
                                    "contact_id": "65bd892b9f5af18802008687",
                                    "channel_id": "659f09c25a9b7f001782bdbf",
                                    "protocol": "2024020200019",
                                    "hostname": "laravel-596cbd575b-n2dxn",
                                    "client_id": "657af8a4f31fb3545b0c7a4a",
                                    "host": "deps.uppchannel.com.br"
                                } {
                                    "ip": "10.108.12.4",
                                    "endpoint": "/client/message/send"
                                }
                                [2024 - 02 - 03 T01: 01: 53.063817 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Condition' {
                                    "client_id": "657af8a4f31fb3545b0c7a4a",
                                    "host": "deps.uppchannel.com.br"
                                } {
                                    "ip": "10.108.12.4",
                                    "endpoint": "/client/message/send"
                                }
                                [2024 - 02 - 03 T01: 01: 53.065477 + 00: 00] components.DEBUG: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Valor de 'REST_HTTP_STATUS'
                            é '200' {
                                "name": "Wesley Freitas",
                                "session_id": "65bd90773278afc9f109ceab",
                                "platform": "WhatsappBusiness",
                                "platform_id": "5585996310234",
                                "contact_id": "65bd892b9f5af18802008687",
                                "channel_id": "659f09c25a9b7f001782bdbf",
                                "protocol": "2024020200019",
                                "hostname": "laravel-596cbd575b-n2dxn",
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.065619 + 00: 00]
                            components.NOTICE: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Grupo não foi preenchido com nenhuma das condições {
                                "name": "Wesley Freitas",
                                "session_id": "65bd90773278afc9f109ceab",
                                "platform": "WhatsappBusiness",
                                "platform_id": "5585996310234",
                                "contact_id": "65bd892b9f5af18802008687",
                                "channel_id": "659f09c25a9b7f001782bdbf",
                                "protocol": "2024020200019",
                                "hostname": "laravel-596cbd575b-n2dxn",
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.065712 + 00: 00] components.DEBUG: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Componente tem exceção {
                                "name": "Wesley Freitas",
                                "session_id": "65bd90773278afc9f109ceab",
                                "platform": "WhatsappBusiness",
                                "platform_id": "5585996310234",
                                "contact_id": "65bd892b9f5af18802008687",
                                "channel_id": "659f09c25a9b7f001782bdbf",
                                "protocol": "2024020200019",
                                "hostname": "laravel-596cbd575b-n2dxn",
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.075150 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ SetGoto] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\SetGoto' {
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.075271 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ SetGoto] Ir para '23a1e2d4' {
                                "name": "Wesley Freitas",
                                "session_id": "65bd90773278afc9f109ceab",
                                "platform": "WhatsappBusiness",
                                "platform_id": "5585996310234",
                                "contact_id": "65bd892b9f5af18802008687",
                                "channel_id": "659f09c25a9b7f001782bdbf",
                                "protocol": "2024020200019",
                                "hostname": "laravel-596cbd575b-n2dxn",
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.087812 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Anchor' {
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.087933 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Ancora: 'APÓS SELEÇÃO DO CPF'.Vai para próxima opção {
                                "name": "Wesley Freitas",
                                "session_id": "65bd90773278afc9f109ceab",
                                "platform": "WhatsappBusiness",
                                "platform_id": "5585996310234",
                                "contact_id": "65bd892b9f5af18802008687",
                                "channel_id": "659f09c25a9b7f001782bdbf",
                                "protocol": "2024020200019",
                                "hostname": "laravel-596cbd575b-n2dxn",
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.092894 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Anchor' {
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.093011 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Anchor] Ancora: 'token pj ok'.Vai para próxima opção {
                                "name": "Wesley Freitas",
                                "session_id": "65bd90773278afc9f109ceab",
                                "platform": "WhatsappBusiness",
                                "platform_id": "5585996310234",
                                "contact_id": "65bd892b9f5af18802008687",
                                "channel_id": "659f09c25a9b7f001782bdbf",
                                "protocol": "2024020200019",
                                "hostname": "laravel-596cbd575b-n2dxn",
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.098073 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Script' {
                                "client_id": "657af8a4f31fb3545b0c7a4a",
                                "host": "deps.uppchannel.com.br"
                            } {
                                "ip": "10.108.12.4",
                                "endpoint": "/client/message/send"
                            }
                            [2024 - 02 - 03 T01: 01: 53.099838 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Requisição Script(Verifica se tem política associada) => URL(https: //gcp-fortics-sz4.uc.r.appspot.com/run) | Headers {"json":{"params":[{"arg":"data","value":"{\"mix\":{\"consultante\":\"UPP TECNOLOGIA LTDA\",\"produto\":\"Smart PF 001\",\"dataConsulta\":\"2024-02-02T22:01:52.9486456-03:00\",\"versaoProduto\":null,\"versao\":\"3\",\"isParcial\":false,\"usuario\":\"KATHLEEN\",\"blocosComErros\":[],\"linkCompartilhamento\":\"https:\\\/\\\/portal.deps.com.br\\\/consulta-compartilhada?id=d7cbce27-b19a-4a99-90f5-c0065cc8784c&token=6fdc711f-61ab-443b-a0b3-56c28d6a6f72\",\"historicoConsultaId\":\"d7cbce27-b19a-4a99-90f5-c0065cc8784c\",\"empresa\":null,\"pessoa\":{\"success\":true,\"message\":null,\"data\":{\"cpf\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"identidade\":\"5119847\",\"nomeMae\":\"CARMINDE PIGNATEL NEGRI\",\"idade\":68,\"situacaoCadastral\":\"REGULAR\",\"dataNascimento\":\"1955-08-28T00:00:00-03:00\",\"rendaPresumida\":null,\"mensagemErroRendaPresumida\":null,\"escolaridade\":\"EDUCACAO SUPERIOR COMPLETA\",\"nacionalidade\":\"BRASILEIRO\",\"dataInscricao\":\"anterior a 10\\\/11\\\/1990\",\"dataHoraReceita\":\"2024-02-02T15:20:25-03:00\",\"codigoControleReceita\":\"BB92.FB21.8844.F662\",\"dadosCadastrais\":{\"uf\":\"SC\",\"cidade\":\"TUBARAO\",\"complemento\":\"\",\"endereco\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"bairro\":\"MTE CASTELO\",\"cep\":\"88702502\"},\"obito\":null,\"politicamenteExposta\":null}},\"faturamentoPresumido\":null,\"restricoesCheques\":{\"possuiInformacao\":true,\"alertas\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"chequesDevolvidosSemFundo\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"chequesDevolvidosOutrosMotivos\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"chequesSustados\":null,\"chequesDevolvidosInformadosUsuario\":null},\"pendenciasRestricoes\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"acoesJudiciais\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"falenciasRecuperacaoJudicial\":null,\"restricao\":null,\"quadroSocietario\":null,\"contatosPreferenciais\":{\"success\":true,\"message\":null,\"data\":[{\"whatsapp\":null,\"telefone\":\"48110419668\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"OI\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"MONTE CASTELO\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"\",\"complemento\":\"\"},{\"whatsapp\":null,\"telefone\":\"4836222055\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"OI\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"MONTE CASTELO\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"\",\"complemento\":\"\"},{\"whatsapp\":true,\"telefone\":\"48996016734\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"TIM\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"OFICINAS\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"complemento\":\"\"},{\"whatsapp\":true,\"telefone\":\"48999690648\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"TIM\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"MTE CASTELO\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"complemento\":\"\"},{\"whatsapp\":null,\"telefone\":\"4862220555\",\"documento\":null,\"nome\":null,\"operadora\":null,\"procon\":null,\"cidade\":null,\"uf\":null,\"bairro\":null,\"rua\":null,\"numero\":null,\"complemento\":null}]},\"participacaoEmpresa\":{\"success\":true,\"message\":\"Sem informa\\u00e7\\u00e3o.\",\"data\":null},\"vinculoEmpregaticio\":{\"success\":true,\"message\":null,\"data\":{\"cbo\":\"239410\",\"descricaoFuncao\":\"ORIENTADOR EDUCACIONAL\",\"dataAdmissao\":\"1982-02-03T00:00:00-03:00\",\"pis\":\"10088386462\",\"rendaEstimada\":1375.33}},\"protestos\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"emails\":{\"success\":true,\"message\":\"Sem informa\\u00e7\\u00e3o.\",\"data\":null},\"sintegra\":null,\"suframa\":null,\"outrosEnderecos\":{\"success\":true,\"message\":null,\"data\":[{\"endereco\":\"RUA MANOEL LUZIDERIO ALVES\",\"numero\":\"153\",\"complemento\":\"CS\",\"cep\":\"88702-045\",\"uf\":\"SC\",\"municipio\":\"TUBARAO\",\"bairro\":\"OFICINAS\"},{\"endereco\":\"RUA MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"complemento\":null,\"cep\":\"88702-502\",\"uf\":\"SC\",\"municipio\":\"TUBARAO\",\"bairro\":\"MONTE CASTELO\"},{\"endereco\":\"ESTRADA GERAL\",\"numero\":\"SN\",\"complemento\":null,\"cep\":\"88720-000\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"RIO CORAL\"},{\"endereco\":\"AVENIDA SANTA CATARINA\",\"numero\":\"1589\",\"complemento\":\"CS\",\"cep\":\"88780-000\",\"uf\":\"SC\",\"municipio\":\"IMBITUBA\",\"bairro\":\"PAES LEME\"},{\"endereco\":\"ESTRADA RIO CORAL\",\"numero\":\"SN\",\"complemento\":\"CS\",\"cep\":\"88720-000\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"RIO CORAL\"},{\"endereco\":\"RUA ESTRADA GERAL\",\"numero\":\"SN\",\"complemento\":null,\"cep\":\"88720-000\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"RIO CORAL\"},{\"endereco\":\"RUA IDA ZANETA\",\"numero\":\"123\",\"complemento\":null,\"cep\":\"88720-970\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"CENTRO\"}]},\"score\":{\"success\":true,\"message\":null,\"data\":{\"score\":940,\"motivos\":null,\"risco\":\"Baixo\",\"descricao\":\"Capacidade de pagamento maior do que a m\\u00e9dia da popula\\u00e7\\u00e3o brasileira.\",\"probabilidadePagamento\":98,\"descricaoPagamento\":\"A chance deste consumidor n\\u00e3o pagar nos pr\\u00f3ximos meses \\u00e9 de 2%.\"}},\"consultas\":{\"success\":true,\"message\":null,\"data\":{\"contagemUltimos15Dias\":null,\"contagemUltimos30Dias\":0,\"contagemUltimos31a60Dias\":0,\"contagemUltimos61a90Dias\":0,\"contagem90DiasMais\":2,\"detalhes\":[{\"dataConsulta\":\"2023-06-02T00:00:00-03:00\",\"quantidadeConsultas\":1,\"segmento\":\"Servi\\u00e7os\"},{\"dataConsulta\":\"2023-03-13T00:00:00-03:00\",\"quantidadeConsultas\":1,\"segmento\":\"0\"}]}},\"indicadores\":null,\"scr\":null,\"rendaPresumida\":{\"success\":true,\"message\":null,\"data\":{\"rendaPresumida\":\"At\\u00e9 R$ 1.500,00\",\"valorMinimo\":1,\"valorMaximo\":1500,\"valor\":1375.33,\"possuiGastoEstimado\":false,\"gastoEstimado\":null}},\"analiseRisco\":null,\"smart\":{\"success\":false,\"message\":\"Error reading JObject from JsonReader. Path '', line 0, position 0.\",\"data\":null},\"relacaoEmpresaParticipacaoSocio\":null,\"grupoComponentes\":null,\"isGrupo\":false},\"consultasComplementares\":[]}"}],"function":"\n data = JSON.parse(data);\n if(data.mix.smart.success == false){\n return \"erro\"\n }else{\n return \"sucesso\"\n }\n"},"http_errors":false,"proxy":{"http":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900","https":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900"}} {"name":"Wesley Freitas","session_id":"65bd90773278afc9f109ceab","platform":"WhatsappBusiness","platform_id":"5585996310234","contact_id":"65bd892b9f5af18802008687","channel_id":"659f09c25a9b7f001782bdbf","protocol":"2024020200019","hostname":"laravel-596cbd575b-n2dxn","client_id":"657af8a4f31fb3545b0c7a4a","host":"deps.uppchannel.com.br"} {"ip":"10.108.12.4","endpoint":"/client/message/send"}
                                [2024 - 02 - 03 T01: 01: 53.127041 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Resposta da execução do Script => {
                                        "success": true,
                                        "result": "erro"
                                    } {
                                        "name": "Wesley Freitas",
                                        "session_id": "65bd90773278afc9f109ceab",
                                        "platform": "WhatsappBusiness",
                                        "platform_id": "5585996310234",
                                        "contact_id": "65bd892b9f5af18802008687",
                                        "channel_id": "659f09c25a9b7f001782bdbf",
                                        "protocol": "2024020200019",
                                        "hostname": "laravel-596cbd575b-n2dxn",
                                        "client_id": "657af8a4f31fb3545b0c7a4a",
                                        "host": "deps.uppchannel.com.br"
                                    } {
                                        "ip": "10.108.12.4",
                                        "endpoint": "/client/message/send"
                                    }
                                    [2024 - 02 - 03 T01: 01: 53.139885 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Condition' {
                                        "client_id": "657af8a4f31fb3545b0c7a4a",
                                        "host": "deps.uppchannel.com.br"
                                    } {
                                        "ip": "10.108.12.4",
                                        "endpoint": "/client/message/send"
                                    }
                                    [2024 - 02 - 03 T01: 01: 53.141595 + 00: 00] components.DEBUG: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Valor de 'STATUS'
                                é 'erro' {
                                    "name": "Wesley Freitas",
                                    "session_id": "65bd90773278afc9f109ceab",
                                    "platform": "WhatsappBusiness",
                                    "platform_id": "5585996310234",
                                    "contact_id": "65bd892b9f5af18802008687",
                                    "channel_id": "659f09c25a9b7f001782bdbf",
                                    "protocol": "2024020200019",
                                    "hostname": "laravel-596cbd575b-n2dxn",
                                    "client_id": "657af8a4f31fb3545b0c7a4a",
                                    "host": "deps.uppchannel.com.br"
                                } {
                                    "ip": "10.108.12.4",
                                    "endpoint": "/client/message/send"
                                }
                                [2024 - 02 - 03 T01: 01: 53.141721 + 00: 00]
                                components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Condition] Encontrou uma opção, indo para grupo: 'ab6d5ca3' {
                                    "name": "Wesley Freitas",
                                    "session_id": "65bd90773278afc9f109ceab",
                                    "platform": "WhatsappBusiness",
                                    "platform_id": "5585996310234",
                                    "contact_id": "65bd892b9f5af18802008687",
                                    "channel_id": "659f09c25a9b7f001782bdbf",
                                    "protocol": "2024020200019",
                                    "hostname": "laravel-596cbd575b-n2dxn",
                                    "client_id": "657af8a4f31fb3545b0c7a4a",
                                    "host": "deps.uppchannel.com.br"
                                } {
                                    "ip": "10.108.12.4",
                                    "endpoint": "/client/message/send"
                                }
                                [2024 - 02 - 03 T01: 01: 53.151040 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Script' {
                                    "client_id": "657af8a4f31fb3545b0c7a4a",
                                    "host": "deps.uppchannel.com.br"
                                } {
                                    "ip": "10.108.12.4",
                                    "endpoint": "/client/message/send"
                                }
                                [2024 - 02 - 03 T01: 01: 53.152748 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Requisição Script(Pega a mensagem do erro retornado) => URL(https: //gcp-fortics-sz4.uc.r.appspot.com/run) | Headers {"json":{"params":[{"arg":"data","value":"{\"mix\":{\"consultante\":\"UPP TECNOLOGIA LTDA\",\"produto\":\"Smart PF 001\",\"dataConsulta\":\"2024-02-02T22:01:52.9486456-03:00\",\"versaoProduto\":null,\"versao\":\"3\",\"isParcial\":false,\"usuario\":\"KATHLEEN\",\"blocosComErros\":[],\"linkCompartilhamento\":\"https:\\\/\\\/portal.deps.com.br\\\/consulta-compartilhada?id=d7cbce27-b19a-4a99-90f5-c0065cc8784c&token=6fdc711f-61ab-443b-a0b3-56c28d6a6f72\",\"historicoConsultaId\":\"d7cbce27-b19a-4a99-90f5-c0065cc8784c\",\"empresa\":null,\"pessoa\":{\"success\":true,\"message\":null,\"data\":{\"cpf\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"identidade\":\"5119847\",\"nomeMae\":\"CARMINDE PIGNATEL NEGRI\",\"idade\":68,\"situacaoCadastral\":\"REGULAR\",\"dataNascimento\":\"1955-08-28T00:00:00-03:00\",\"rendaPresumida\":null,\"mensagemErroRendaPresumida\":null,\"escolaridade\":\"EDUCACAO SUPERIOR COMPLETA\",\"nacionalidade\":\"BRASILEIRO\",\"dataInscricao\":\"anterior a 10\\\/11\\\/1990\",\"dataHoraReceita\":\"2024-02-02T15:20:25-03:00\",\"codigoControleReceita\":\"BB92.FB21.8844.F662\",\"dadosCadastrais\":{\"uf\":\"SC\",\"cidade\":\"TUBARAO\",\"complemento\":\"\",\"endereco\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"bairro\":\"MTE CASTELO\",\"cep\":\"88702502\"},\"obito\":null,\"politicamenteExposta\":null}},\"faturamentoPresumido\":null,\"restricoesCheques\":{\"possuiInformacao\":true,\"alertas\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"chequesDevolvidosSemFundo\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"chequesDevolvidosOutrosMotivos\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"chequesSustados\":null,\"chequesDevolvidosInformadosUsuario\":null},\"pendenciasRestricoes\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"acoesJudiciais\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"falenciasRecuperacaoJudicial\":null,\"restricao\":null,\"quadroSocietario\":null,\"contatosPreferenciais\":{\"success\":true,\"message\":null,\"data\":[{\"whatsapp\":null,\"telefone\":\"48110419668\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"OI\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"MONTE CASTELO\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"\",\"complemento\":\"\"},{\"whatsapp\":null,\"telefone\":\"4836222055\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"OI\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"MONTE CASTELO\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"\",\"complemento\":\"\"},{\"whatsapp\":true,\"telefone\":\"48996016734\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"TIM\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"OFICINAS\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"complemento\":\"\"},{\"whatsapp\":true,\"telefone\":\"48999690648\",\"documento\":\"28855795953\",\"nome\":\"MARIA SALETE NEGRI\",\"operadora\":\"TIM\",\"procon\":\"(NAO TEM)\",\"cidade\":\"TUBARAO\",\"uf\":\"SC\",\"bairro\":\"MTE CASTELO\",\"rua\":\"R MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"complemento\":\"\"},{\"whatsapp\":null,\"telefone\":\"4862220555\",\"documento\":null,\"nome\":null,\"operadora\":null,\"procon\":null,\"cidade\":null,\"uf\":null,\"bairro\":null,\"rua\":null,\"numero\":null,\"complemento\":null}]},\"participacaoEmpresa\":{\"success\":true,\"message\":\"Sem informa\\u00e7\\u00e3o.\",\"data\":null},\"vinculoEmpregaticio\":{\"success\":true,\"message\":null,\"data\":{\"cbo\":\"239410\",\"descricaoFuncao\":\"ORIENTADOR EDUCACIONAL\",\"dataAdmissao\":\"1982-02-03T00:00:00-03:00\",\"pis\":\"10088386462\",\"rendaEstimada\":1375.33}},\"protestos\":{\"success\":true,\"message\":\"Nada consta.\",\"data\":null},\"emails\":{\"success\":true,\"message\":\"Sem informa\\u00e7\\u00e3o.\",\"data\":null},\"sintegra\":null,\"suframa\":null,\"outrosEnderecos\":{\"success\":true,\"message\":null,\"data\":[{\"endereco\":\"RUA MANOEL LUZIDERIO ALVES\",\"numero\":\"153\",\"complemento\":\"CS\",\"cep\":\"88702-045\",\"uf\":\"SC\",\"municipio\":\"TUBARAO\",\"bairro\":\"OFICINAS\"},{\"endereco\":\"RUA MANOEL LUZIDERO ALVES\",\"numero\":\"153\",\"complemento\":null,\"cep\":\"88702-502\",\"uf\":\"SC\",\"municipio\":\"TUBARAO\",\"bairro\":\"MONTE CASTELO\"},{\"endereco\":\"ESTRADA GERAL\",\"numero\":\"SN\",\"complemento\":null,\"cep\":\"88720-000\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"RIO CORAL\"},{\"endereco\":\"AVENIDA SANTA CATARINA\",\"numero\":\"1589\",\"complemento\":\"CS\",\"cep\":\"88780-000\",\"uf\":\"SC\",\"municipio\":\"IMBITUBA\",\"bairro\":\"PAES LEME\"},{\"endereco\":\"ESTRADA RIO CORAL\",\"numero\":\"SN\",\"complemento\":\"CS\",\"cep\":\"88720-000\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"RIO CORAL\"},{\"endereco\":\"RUA ESTRADA GERAL\",\"numero\":\"SN\",\"complemento\":null,\"cep\":\"88720-000\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"RIO CORAL\"},{\"endereco\":\"RUA IDA ZANETA\",\"numero\":\"123\",\"complemento\":null,\"cep\":\"88720-970\",\"uf\":\"SC\",\"municipio\":\"PEDRAS GRANDES\",\"bairro\":\"CENTRO\"}]},\"score\":{\"success\":true,\"message\":null,\"data\":{\"score\":940,\"motivos\":null,\"risco\":\"Baixo\",\"descricao\":\"Capacidade de pagamento maior do que a m\\u00e9dia da popula\\u00e7\\u00e3o brasileira.\",\"probabilidadePagamento\":98,\"descricaoPagamento\":\"A chance deste consumidor n\\u00e3o pagar nos pr\\u00f3ximos meses \\u00e9 de 2%.\"}},\"consultas\":{\"success\":true,\"message\":null,\"data\":{\"contagemUltimos15Dias\":null,\"contagemUltimos30Dias\":0,\"contagemUltimos31a60Dias\":0,\"contagemUltimos61a90Dias\":0,\"contagem90DiasMais\":2,\"detalhes\":[{\"dataConsulta\":\"2023-06-02T00:00:00-03:00\",\"quantidadeConsultas\":1,\"segmento\":\"Servi\\u00e7os\"},{\"dataConsulta\":\"2023-03-13T00:00:00-03:00\",\"quantidadeConsultas\":1,\"segmento\":\"0\"}]}},\"indicadores\":null,\"scr\":null,\"rendaPresumida\":{\"success\":true,\"message\":null,\"data\":{\"rendaPresumida\":\"At\\u00e9 R$ 1.500,00\",\"valorMinimo\":1,\"valorMaximo\":1500,\"valor\":1375.33,\"possuiGastoEstimado\":false,\"gastoEstimado\":null}},\"analiseRisco\":null,\"smart\":{\"success\":false,\"message\":\"Error reading JObject from JsonReader. Path '', line 0, position 0.\",\"data\":null},\"relacaoEmpresaParticipacaoSocio\":null,\"grupoComponentes\":null,\"isGrupo\":false},\"consultasComplementares\":[]}"}],"function":"\n data = JSON.parse(data);\n return data.mix.smart.message;\n"},"http_errors":false,"proxy":{"http":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900","https":"4AIsr41GBpcCOrDZ:fntBtrE6sE99kdC9@10.9.0.6:9900"}} {"name":"Wesley Freitas","session_id":"65bd90773278afc9f109ceab","platform":"WhatsappBusiness","platform_id":"5585996310234","contact_id":"65bd892b9f5af18802008687","channel_id":"659f09c25a9b7f001782bdbf","protocol":"2024020200019","hostname":"laravel-596cbd575b-n2dxn","client_id":"657af8a4f31fb3545b0c7a4a","host":"deps.uppchannel.com.br"} {"ip":"10.108.12.4","endpoint":"/client/message/send"}
                                    [2024 - 02 - 03 T01: 01: 53.180110 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Script] Resposta da execução do Script => {
                                            "success": true,
                                            "result": "Error reading JObject from JsonReader. Path '', line 0, position 0."
                                        } {
                                            "name": "Wesley Freitas",
                                            "session_id": "65bd90773278afc9f109ceab",
                                            "platform": "WhatsappBusiness",
                                            "platform_id": "5585996310234",
                                            "contact_id": "65bd892b9f5af18802008687",
                                            "channel_id": "659f09c25a9b7f001782bdbf",
                                            "protocol": "2024020200019",
                                            "hostname": "laravel-596cbd575b-n2dxn",
                                            "client_id": "657af8a4f31fb3545b0c7a4a",
                                            "host": "deps.uppchannel.com.br"
                                        } {
                                            "ip": "10.108.12.4",
                                            "endpoint": "/client/message/send"
                                        }
                                        [2024 - 02 - 03 T01: 01: 53.193729 + 00: 00] components.INFO: [Smartzap\ Http\ Controllers\ Client\ Components\ Finish] Executando o componente: 'Smartzap\Http\Controllers\Client\Components\Finish' {
                                            "client_id": "657af8a4f31fb3545b0c7a4a",
                                            "host": "deps.uppchannel.com.br"
                                        } {
                                            "ip": "10.108.12.4",
                                            "endpoint": "/client/message/send"
                                        }