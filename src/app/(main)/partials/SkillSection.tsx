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
                        <div className="p-4 md:p-16 border-border rounded-lg dark:bg-card  bg-primary-100 text-primary grid md:grid-cols-6 grid-cols-3 gap-2 md:gap-10">
                            <AnimatedCard label="React">
                                <ReactJs className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Redux">
                                <Redux className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Next Js">
                                <NextJs className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Angular">
                                <Angular className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Vue Js">
                                <VueJs className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Nuxt Js">
                                <Nuxt className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Javascript">
                                <Javascript className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Typescript">
                                <Typescript className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Node Js">
                                <NodeJs className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Express Js">
                                <Express className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Fastify Js">
                                <Fastify className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Mongo">
                                <Mongo className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Git">
                                <Git className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Docker">
                                <Docker className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Redis">
                                <Redis className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Jest">
                                <Jest className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                            <AnimatedCard label="Socket IO">
                                <Socket className="size-10 md:size-[60px]" />
                            </AnimatedCard>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SkillSection;
