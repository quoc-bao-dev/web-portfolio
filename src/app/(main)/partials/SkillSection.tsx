import Angular from '@/components/icons/Angular';
import Docker from '@/components/icons/Docker';
import Express from '@/components/icons/Express';
import Fastify from '@/components/icons/Fastify';
import Git from '@/components/icons/Git';
import Javascript from '@/components/icons/Javascript';
import Jest from '@/components/icons/Jest';
import Mongo from '@/components/icons/Mongo';
import NextJs from '@/components/icons/NextJs';
import NodeJs from '@/components/icons/NodeJs';
import Nuxt from '@/components/icons/Nuxt';
import ReactJs from '@/components/icons/ReactJs';
import Redis from '@/components/icons/Redis';
import Socket from '@/components/icons/Socket';
import Typescript from '@/components/icons/Typescript';
import VueJs from '@/components/icons/VueJs';
import Container from '@/components/layouts/Container';
import Redux from '@/components/icons/Redux';
import AnimatedCard from './AnimatedCard';

const SkillSection = () => {
    return (
        <section id="Skill">
            <Container>
                <div className="py-24 min-h-screen">
                    <h2 className="text-primary text-3xl text-center">
                        Technical Skills
                    </h2>
                    <div className="pt-16">
                        <div className="p-16 border-border rounded-lg dark:bg-card  bg-primary-100 text-primary grid grid-cols-6 gap-10">
                            <AnimatedCard label="React">
                                <ReactJs />
                            </AnimatedCard>
                            <AnimatedCard label="Redux">
                                <Redux />
                            </AnimatedCard>
                            <AnimatedCard label="Next Js">
                                <NextJs />
                            </AnimatedCard>
                            <AnimatedCard label="Angular">
                                <Angular />
                            </AnimatedCard>
                            <AnimatedCard label="Vue Js">
                                <VueJs />
                            </AnimatedCard>
                            <AnimatedCard label="Nuxt Js">
                                <Nuxt />
                            </AnimatedCard>
                            <AnimatedCard label="Javascript">
                                <Javascript />
                            </AnimatedCard>
                            <AnimatedCard label="Typescript">
                                <Typescript />
                            </AnimatedCard>
                            <AnimatedCard label="Node Js">
                                <NodeJs />
                            </AnimatedCard>
                            <AnimatedCard label="Express Js">
                                <Express />
                            </AnimatedCard>
                            <AnimatedCard label="Fastify Js">
                                <Fastify />
                            </AnimatedCard>
                            <AnimatedCard label="Mongo">
                                <Mongo />
                            </AnimatedCard>
                            <AnimatedCard label="Git">
                                <Git />
                            </AnimatedCard>
                            <AnimatedCard label="Docker">
                                <Docker />
                            </AnimatedCard>
                            <AnimatedCard label="Redis">
                                <Redis />
                            </AnimatedCard>
                            <AnimatedCard label="Jest">
                                <Jest />
                            </AnimatedCard>
                            <AnimatedCard label="Socket IO">
                                <Socket />
                            </AnimatedCard>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SkillSection;
