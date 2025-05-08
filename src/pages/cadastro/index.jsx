import { useNavigate  } from "react-router-dom";
import { MdPerson, MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, TermosText, FazerLogin, Wrapper, LinkFazerLogin, Row } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            await api.post('/users', {
                name: formData.nome,
                email: formData.email,
                senha: formData.senha
            });
        
            navigate('/login');

        } catch (e) {
          console.error(e);
          alert('Erro ao cadastrar. Tente novamente');
        }
            
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis.</TitleLogin>
                <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control}/>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Column>
                    <TermosText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</TermosText>
                </Column>
                <Row>
                    <FazerLogin>Já tenho uma conta: 
                        <LinkFazerLogin>
                            Fazer Login
                        </LinkFazerLogin>
                    </FazerLogin>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }