import Container from '@/components/layouts/Container';
import Image from 'next/image';

const ProjectSection = () => {
    return (
        <section id="Project">
            <Container>
                <div className="py-24 min-h-screen">
                    <h2 className="text-primary text-3xl text-center">
                        Project
                    </h2>
                    <div className="pt-16 flex flex-col gap-20">
                        <article className="p-10 border border-border rounded-lg bg-card text-primary/60 grid grid-cols-2 gap-10">
                            <div className="w-full aspect-[6/5]">
                                <Image
                                    src="/image/banner-1.jpg"
                                    alt="about"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="text-2xl text-center">
                                    Project 1
                                </h3>
                                <p className="pt-3">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Repellendus, assumenda
                                    possimus id placeat, magnam perspiciatis
                                    quidem dolor magni qui repellat atque
                                    incidunt ducimus illum modi iusto deserunt
                                    ullam molestiae soluta!
                                </p>
                                <h4 className="pt-3">Feature</h4>
                                <ul className="pl-4">
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                                <h4 className="pt-3">Tech Stack</h4>
                                <ul className="pl-4">
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                            </div>
                        </article>

                        <article className="p-10 border border-border rounded-lg bg-card text-primary/60 grid grid-cols-2 gap-10">
                            <div className="w-full">
                                <h3 className="text-2xl text-center">
                                    Project 1
                                </h3>
                                <p className="pt-3">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Repellendus, assumenda
                                    possimus id placeat, magnam perspiciatis
                                    quidem dolor magni qui repellat atque
                                    incidunt ducimus illum modi iusto deserunt
                                    ullam molestiae soluta!
                                </p>
                                <h4 className="pt-3">Feature</h4>
                                <ul className="pl-4">
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                                <h4 className="pt-3">Tech Stack</h4>
                                <ul className="pl-4">
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                            </div>
                            <div className="w-full aspect-[6/5]">
                                <Image
                                    src="/image/banner-1.jpg"
                                    alt="about"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProjectSection;
