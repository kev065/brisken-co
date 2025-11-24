'use client';

import { Container, Title, Text, List, ThemeIcon, Box, SimpleGrid, Card } from '@mantine/core';
import { IconLeaf } from '@tabler/icons-react';
import { NavigationHeader } from '../components/Header';
import { Footer } from '../components/Footer';

export default function NutritionPage() {
    const feedProducts = [
        { name: 'Chick starter', description: 'A high-protein feed designed for day-old chicks' },
        { name: 'Chick grower', description: 'A feed designed for chicks between 1-4 weeks old' },
        { name: 'Pullet developer', description: 'A feed designed for young pullets' },
        { name: 'Layer mash', description: 'A feed designed for laying hens' },
        { name: 'Broiler starter', description: 'A high-protein feed designed for day-old broilers' },
        { name: 'Broiler grower', description: 'A feed designed for broilers between 1-4 weeks old' },
        { name: 'Broiler finisher', description: 'A feed designed for broilers between 4-6 weeks old' },
    ];

    return (
        <>
            <NavigationHeader />
            <Box pt={120} pb={80}>
                <Container size="lg">
                    <Title order={1} mb={30} style={{ color: '#2e7d32' }}>
                        The Importance of Nutrition
                    </Title>

                    <Text size="lg" mb={40} style={{ lineHeight: 1.6 }}>
                        At Brisken Limited, we believe that nutrition is the key to successful poultry farming. Our feed products are formulated to meet the nutritional needs of birds at every stage of their growth. We offer a range of feed products that are designed to promote healthy growth, improve feed efficiency, and enhance productivity.
                    </Text>

                    <Title order={2} mb={30} style={{ color: '#1a1a1a' }}>
                        Our Feed Products
                    </Title>

                    <Text size="lg" mb={30}>
                        Our feed products are designed to meet the specific needs of different types of birds. These include:
                    </Text>

                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                        {feedProducts.map((product, index) => (
                            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%' }}>
                                <ThemeIcon color="green" size={40} radius="xl" mb="md">
                                    <IconLeaf size={24} />
                                </ThemeIcon>
                                <Text fw={700} size="xl" mb="xs" style={{ color: '#2e7d32' }}>
                                    {product.name}
                                </Text>
                                <Text size="md" c="dimmed">
                                    {product.description}
                                </Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
