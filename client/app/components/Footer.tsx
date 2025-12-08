'use client';

import { Container, Group, Stack, Text, Divider, Box, ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandFacebook } from '@tabler/icons-react';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      component="footer"
      style={{
        background: 'linear-gradient(135deg, #1565c0 0%, #2196f3 100%)',
        color: 'white',
      }}
    >
      <Container size="lg" py={50}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mobile layout - vertical */}
          <Stack mb={40} gap={30} hiddenFrom="sm">
            <motion.div variants={itemVariants}>
              <Stack gap={0}>
                <Text fw={700} size="lg" mb="sm">
                  Brisken Limited
                </Text>
                <Text size="sm" opacity={0.9}>
                  Your trusted partner in poultry production
                </Text>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack gap={0}>
                <Text fw={700} size="sm" mb="sm">
                  CONTACT
                </Text>
                <a href="tel:+254769412626" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    +254 769 412626
                  </Text>
                </a>
                <Text size="sm" opacity={0.9}>
                  P.O BOX 7682 -30100
                </Text>
                <Text size="sm" opacity={0.9}>
                  Eldoret, Kenya
                </Text>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack gap={0}>
                <Text fw={700} size="sm" mb="sm">
                  QUICK LINKS
                </Text>
                <Link href="/opportunities" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Opportunities
                  </Text>
                </Link>
                <Link href="/nutrition" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Nutrition
                  </Text>
                </Link>
                <Link href="/sustainability" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Sustainability
                  </Text>
                </Link>
                <Link href="/quality-assurance" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Quality Assurance
                  </Text>
                </Link>
              </Stack>
            </motion.div>
          </Stack>

          {/* Desktop layout - horizontal */}
          <Group grow mb={40} visibleFrom="sm">
            <motion.div variants={itemVariants}>
              <Stack gap={0}>
                <Text fw={700} size="lg" mb="sm">
                  Brisken Limited
                </Text>
                <Text size="sm" opacity={0.9}>
                  Your trusted partner in poultry production
                </Text>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack gap={0}>
                <Text fw={700} size="sm" mb="sm">
                  CONTACT
                </Text>
                <a href="tel:+254769412626" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    +254769412626
                  </Text>
                </a>
                <Text size="sm" opacity={0.9}>
                  P.O BOX 7682 -30100
                </Text>
                <Text size="sm" opacity={0.9}>
                  Eldoret, Kenya
                </Text>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack gap={0}>
                <Text fw={700} size="sm" mb="sm">
                  QUICK LINKS
                </Text>
                <Link href="/opportunities" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Opportunities
                  </Text>
                </Link>
                <Link href="/nutrition" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Nutrition
                  </Text>
                </Link>
                <Link href="/sustainability" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Sustainability
                  </Text>
                </Link>
                <Link href="/quality-assurance" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                    Quality Assurance
                  </Text>
                </Link>
              </Stack>
            </motion.div>
          </Group>

          <Divider my={20} style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center', opacity: 0.8 }}
          >
            <Group justify="center" mb={20}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ActionIcon
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61571440331401"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="md"
                  style={{
                    background: '#f29418ff',
                    color: 'white',
                  }}
                  aria-label="Visit our Facebook page"
                >
                  <IconBrandFacebook size={20} />
                </ActionIcon>
              </motion.div>
            </Group>
            <Text size="sm">
              © {new Date().getFullYear()} Brisken Limited. All rights reserved.
            </Text>
            <Text size="sm" mt={12} opacity={0.7}>
              Website designed by{' '}
              <a
                href="https://valcheq.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffed1a',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Valcheq Technologies
              </a>
            </Text>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
