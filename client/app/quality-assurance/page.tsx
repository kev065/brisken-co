'use client';

import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Box, List, Group, Button, Badge, Stack } from '@mantine/core';
import { IconAward, IconChartBar, IconEgg, IconHeartbeat, IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function QualityAssurancePage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const features = [
        {
            title: 'Maximum Production',
            icon: IconChartBar,
            color: 'blue',
            content: [
                'Adaptable feeding programs for all systems (free-range, barn, caged)',
                'Balanced digestible amino acids and energy for high egg output',
                'Extra energy during early laying for production and growth'
            ]
        },
        {
            title: 'Excellent Feed Efficiency',
            icon: IconCheck,
            color: 'teal',
            content: [
                'High energy density feeds tailored for efficiency',
                'Best enzyme supplementation to minimize feed intake',
                'Improved feed conversion ratios and enhanced profitability'
            ]
        },
        {
            title: 'Egg Quality & Skeletal Integrity',
            icon: IconEgg,
            color: 'orange',
            content: [
                'Optimized calcium, phosphorus, and sodium levels',
                'Supports high-quality egg production throughout the cycle',
                'Maintains skeletal integrity for long-term flock health'
            ]
        },
        {
            title: 'Better Health & Vitality',
            icon: IconHeartbeat,
            color: 'red',
            content: [
                'Essential vitamins and trace elements included',
                'Boosts immune function during stress or disease',
                'Promotes overall vitality and flock well-being'
            ]
        },
    ];

    return (
        <>
            <Box
                style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    paddingBottom: '80px',
                    paddingTop: '60px',
                }}
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Container size="lg">
                    <Box mb={60} style={{ textAlign: 'center' }}>
                        <motion.div variants={itemVariants}>
                            <Badge size="lg" variant="light" color="blue" mb="md">
                                Commitment to Excellence
                            </Badge>
                            <Title
                                order={1}
                                mb="md"
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: 800,
                                    color: '#1a1a1a',
                                    lineHeight: 1.2,
                                }}
                            >
                                Brisken Quality Assurance
                            </Title>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Text size="xl" c="dimmed" maw={800} mx="auto" style={{ fontSize: '1.25rem' }}>
                                Our Layer feed guarantees reflect our dedication to supporting farmers with superior nutrition solutions.
                            </Text>
                        </motion.div>
                    </Box>

                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} verticalSpacing={50}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, zIndex: 1 }}
                            >
                                <Card
                                    padding="xl"
                                    radius="lg"
                                    style={{
                                        height: '100%',
                                        backgroundColor: 'white',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                        transition: 'box-shadow 0.2s ease',
                                    }}
                                >
                                    <ThemeIcon
                                        size={60}
                                        radius="md"
                                        variant="light"
                                        color={feature.color}
                                        mb="xl"
                                    >
                                        <feature.icon size={32} stroke={1.5} />
                                    </ThemeIcon>

                                    <Title order={3} mb="lg" style={{ color: '#2C3E50' }}>{feature.title}</Title>

                                    <List
                                        spacing="md"
                                        size="md"
                                        center
                                        icon={
                                            <ThemeIcon color={feature.color} size={24} radius="xl" variant="transparent">
                                                <IconCheck size={16} />
                                            </ThemeIcon>
                                        }
                                    >
                                        {feature.content.map((item, i) => (
                                            <List.Item key={i} style={{ color: '#555', lineHeight: 1.6 }}>
                                                {item}
                                            </List.Item>
                                        ))}
                                    </List>
                                </Card>
                            </motion.div>
                        ))}
                    </SimpleGrid>

                    {/* Additional Info Section */}
                    <motion.div variants={itemVariants}>
                        <Box mt={100} p="xl" style={{ borderRadius: '16px', backgroundColor: '#fff', borderLeft: '6px solid #228be6', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <Group align="flex-start">
                                <ThemeIcon size={50} radius="xl" color="blue" variant="filled">
                                    <IconAward size={28} />
                                </ThemeIcon>
                                <Box style={{ flex: 1 }}>
                                    <Title order={3} mb="xs" style={{ color: '#1a1a1a' }}>Why Choose Brisken Feed?</Title>
                                    <Text c="dimmed" size="lg" style={{ lineHeight: 1.7 }}>
                                        We understand that consistency is key. Maintaining elevated calcium and phosphorus levels during the late laying period helps preserve egg quality throughout the final stages of production. Our feeds are formulated not just for production, but for the longevity and welfare of your flock.
                                    </Text>
                                </Box>
                            </Group>
                        </Box>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Group justify="center" mt={80}>
                            <Stack gap="xs" align="center">
                                <Text size="lg" fw={500} c="dimmed" mb="xs">Ready to optimize your poultry production?</Text>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        component="a"
                                        href="tel:+254769412626"
                                        size="xl"
                                        radius="md"
                                        color="blue"
                                        variant="filled"
                                        style={{
                                            paddingLeft: 40,
                                            paddingRight: 40,
                                            boxShadow: '0 8px 20px rgba(34, 139, 230, 0.3)',
                                            transition: 'transform 0.2s',
                                        }}
                                    >
                                        Contact Us Today
                                    </Button>
                                </motion.div>
                            </Stack>
                        </Group>
                    </motion.div>

                </Container>
            </Box>
        </>
    );
}
