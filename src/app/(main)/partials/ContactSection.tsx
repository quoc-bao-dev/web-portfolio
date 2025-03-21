import Container from '@/components/layouts/Container';

const ContactSection = () => {
    return (
        <section id="Contact">
            <Container>
                <div className="py-24 ">
                    <div className="md:pt-16">
                        <div className="p-4 md:p-16  rounded-lg bg-primary-100  text-primary-900 grid md:grid-cols-3 gap-5">
                            <div className="w-full md:col-span-2">
                                <h3 className="text-2xl text-center">
                                    Contact
                                </h3>
                                <p className="pt-3">
                                    I’m always open to discussions and
                                    collaborations to create amazing projects.
                                    Feel free to contact me via:
                                </p>
                                <div className="pt-5">
                                    <ul>
                                        <li>
                                            <p>Email: quocbaodev@gmail.com</p>
                                            <p>Phone: +84 919 616 224</p>
                                            <p>
                                                Facebook:
                                                facebook.com/quocbaophoto
                                            </p>
                                            <p>GitHub: github.com/quocbaodev</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full">
                                <h3 className="text-2xl text-center">
                                    Get in Touch
                                </h3>
                                <div className="pt-5">
                                    <form
                                        action=""
                                        className="flex flex-col gap-3"
                                    >
                                        <textarea
                                            className="border border-border rounded-lg py-2 px-3 bg-input text-primary/60"
                                            placeholder="Message"
                                            rows={5}
                                            style={{ resize: 'none' }}
                                        ></textarea>
                                        <input
                                            type="text"
                                            className="border border-border rounded-lg py-2 px-3 bg-input text-primary/60"
                                            placeholder="Email"
                                        />
                                        <button className="py-3 rounded-lg bg-primary text-primary-foreground">
                                            Send for me
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
