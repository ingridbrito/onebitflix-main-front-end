import styles from "../styles/registerLogin.module.scss"
import Head from "next/head";
import HeaderGeneric from "@/src/components/common/headerGeneric";
import Footer from "@/src/components/common/footer";
import { Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useRouter } from "next/router";
import ToastComponent from "@/src/components/common/toast";
import { FormEvent, useEffect, useState } from "react";
import authService from "@/src/services/authService";
import PageSpinner from "@/src/components/common/spinner";


const Login = function () {

    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const [toastColor, setToastColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        if (sessionStorage.getItem("onebitflix-token")){
            router.push("/home")
        }
    }, []);
    

    useEffect(() => {    
        const registerSuccess = router.query.registred;

        if (registerSuccess === "true") {
            setToastColor("bg-success");
          setToastIsOpen(true);
            setTimeout(() => {
              setToastIsOpen(false);
          }, 1000 * 3);
          setToastMessage("Cadastro feito com sucesso!");
        }
    }, [router.query]);

    if (loading) {
        return <PageSpinner />;
    }

const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email")!.toString();
        const password = formData.get("password")!.toString();
        const params = { email, password };

        const { status } = await authService.login(params);

        if (status === 200){
            router.push("/home")
        }else{
            setToastColor("bg-danger");
            setToastIsOpen(true);
              setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage("E-mail ou senha incorretos!");
            console.log(status)
        } 
        
    }


    return (
        <>
            <Head>
                <title>Onebitflix - Login</title>
                <script src="https://jsuites.net/v4/jsuites.js"></script>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <HeaderGeneric
                    logoUrl="/"
                    btnUrl="/register"
                    btnContent="Cadastro"
                />
                <Container className="py-5">
                    <p className={styles.formTitle}>
                        <strong>Bem-vindo(a) ao OneBitFlix!</strong>
                    </p>
                    <Form className={styles.form} onSubmit={handleLogin}>
                       
                       <FormGroup>
                         <Label for="email" className={styles.label}>
                            E-MAIL
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Qual o seu email?"
                            required
                            className={styles.input}
                        />
                       </FormGroup>
                       
                        <FormGroup>
                            <Label for="password" className={styles.label}>
                                SENHA
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Qual a sua senha?"
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        <Button type="submit" outline className={styles.formBtn}>
                            ENTRAR
                        </Button>

                    </Form>


                </Container>
                <Footer />
                <ToastComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage}/>
            </main>
        </>
    );
};

export default Login;