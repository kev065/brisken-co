'use client';

import { Container, Title, Text, List, ThemeIcon, Box, Grid, Card, Group, Button } from '@mantine/core';
import { IconCheck, IconCircleCheck } from '@tabler/icons-react';

export default function OpportunitiesPage() {
    return (
        <>
            <Box pt={120} pb={80}>
                <Container size="lg">
                    <Title order={1} mb={30} style={{ color: '#1a1a1a' }}>
                        Our Products and Services
                    </Title>

                    <Text size="lg" mb={40} style={{ lineHeight: 1.6 }}>
                        We're excited to introduce you to our hatchery and retail services, where you can find the latest hatch dates and availability schedules. Also, our Eggs and poultry feed are in stock now. Simply call us for enquiries.
                    </Text>

                    <Text size="lg" mb={20}>
                        We offer a wide range of products and services to cater to the needs of poultry farmers. These include:
                    </Text>

                    <Grid gutter={40} mb={60}>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Title order={3} mb={20} style={{ color: '#ffa500' }}>Core Products</Title>
                                <List
                                    spacing="md"
                                    size="lg"
                                    center
                                    icon={
                                        <ThemeIcon color="orange" size={24} radius="xl">
                                            <IconCheck size={16} />
                                        </ThemeIcon>
                                    }
                                >
                                    <List.Item>Fresh and nutritious eggs</List.Item>
                                    <List.Item>High-quality day-old chicks</List.Item>
                                    <List.Item>
                                        A variety of feed products, including:
                                        <List withPadding mt={10} spacing="sm" size="md">
                                            <List.Item>Chick starter</List.Item>
                                            <List.Item>Chick grower</List.Item>
                                            <List.Item>Pullet developer</List.Item>
                                            <List.Item>Layer mash</List.Item>
                                            <List.Item>Broiler starter</List.Item>
                                            <List.Item>Broiler grower</List.Item>
                                            <List.Item>Broiler finisher</List.Item>
                                        </List>
                                    </List.Item>
                                </List>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Title order={3} mb={20} style={{ color: '#2196f3' }}>Other Products & Services</Title>
                                <List
                                    spacing="md"
                                    size="lg"
                                    center
                                    icon={
                                        <ThemeIcon color="blue" size={24} radius="xl">
                                            <IconCircleCheck size={16} />
                                        </ThemeIcon>
                                    }
                                >
                                    <List.Item>Biosecurity and disinfectant products</List.Item>
                                    <List.Item>Brooder kits and accessories</List.Item>
                                    <List.Item>Feeders and waterers</List.Item>
                                    <List.Item>Fencing and enclosures</List.Item>
                                    <List.Item>Incubators and incubation supplies</List.Item>
                                    <List.Item>Nesting boxes and egg handling supplies</List.Item>
                                    <List.Item>Pumps and medicators</List.Item>
                                    <List.Item>Stock tanks and transport crates</List.Item>
                                    <List.Item>Treatments, supplements, and remedies</List.Item>
                                </List>
                            </Card>
                        </Grid.Col>
                    </Grid>

                    <Group justify="center" mt={60}>
                        <Button
                            component="a"
                            href="tel:+254769412626"
                            size="xl"
                            radius="md"
                            color="orange"
                            variant="filled"
                            style={{
                                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
                                transition: 'transform 0.2s ease',
                            }}
                        >
                            Call for Enquiries
                        </Button>
                    </Group>
                </Container>
            </Box>
        </>
    );
}
