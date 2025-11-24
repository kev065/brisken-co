'use client';

import { Container, Title, Text, List, ThemeIcon, Box, Alert, Grid, Card } from '@mantine/core';
import { IconShieldCheck, IconAlertCircle } from '@tabler/icons-react';
import { NavigationHeader } from '../components/Header';
import { Footer } from '../components/Footer';

export default function SustainabilityPage() {
    const diseaseSigns = [
        'Depressed activity',
        'Ruffled feathers',
        'Breathing problems',
        'Diarrhea or other manure issues',
        'Nasal discharge or eye build-up',
        'Drop in feed intake',
        'Swelling around joints',
        'Drop in production',
    ];

    return (
        <>
            <NavigationHeader />
            <Box pt={120} pb={80}>
                <Container size="lg">
                    <Title order={1} mb={30} style={{ color: '#c62828' }}>
                        Biosecurity and Disease Prevention
                    </Title>

                    <Text size="lg" mb={40} style={{ lineHeight: 1.6 }}>
                        Biosecurity is critical in poultry farming. It involves taking measures to prevent the spread of disease and promote a healthy environment for birds. We recommend simple actions like sanitizing equipment, vaccinating birds, and controlling pests to prevent disease.
                    </Text>

                    <Grid gutter={40}>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="xl" radius="md" withBorder style={{ height: '100%', background: '#fff5f5' }}>
                                <Title order={2} mb={20} style={{ color: '#c62828' }}>
                                    Common Signs of Disease
                                </Title>
                                <Text size="lg" mb={20}>
                                    If you notice any of the following signs, it's essential to act:
                                </Text>
                                <List
                                    spacing="sm"
                                    size="lg"
                                    center
                                    icon={
                                        <ThemeIcon color="red" size={24} radius="xl">
                                            <IconAlertCircle size={16} />
                                        </ThemeIcon>
                                    }
                                >
                                    {diseaseSigns.map((sign, index) => (
                                        <List.Item key={index}>{sign}</List.Item>
                                    ))}
                                </List>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="xl" radius="md" withBorder style={{ height: '100%', background: '#e3f2fd' }}>
                                <Title order={2} mb={20} style={{ color: '#1565c0' }}>
                                    Prevention is Key
                                </Title>
                                <Text size="lg" mb={20}>
                                    Protect your flock with our range of biosecurity products:
                                </Text>
                                <List
                                    spacing="sm"
                                    size="lg"
                                    center
                                    icon={
                                        <ThemeIcon color="blue" size={24} radius="xl">
                                            <IconShieldCheck size={16} />
                                        </ThemeIcon>
                                    }
                                >
                                    <List.Item>Disinfectants & Sanitizers</List.Item>
                                    <List.Item>Vaccination Equipment</List.Item>
                                    <List.Item>Pest Control Solutions</List.Item>
                                    <List.Item>Protective Gear</List.Item>
                                </List>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
