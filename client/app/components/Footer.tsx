'use client';

import { Container, Group, Stack, Text, Divider, Box } from '@mantine/core';
import { motion } from 'framer-motion';

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
        marginTop: '80px',
      }}
    >
      <Container size="lg" py={50}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Group grow mb={40}>
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
                <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                  About Us
                </Text>
                <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                  Products
                </Text>
                <Text size="sm" opacity={0.9} style={{ cursor: 'pointer' }}>
                  Contact
                </Text>
              </Stack>
            </motion.div>
          </Group>

          <Divider my={20} style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center', opacity: 0.8 }}
          >
            <Text size="sm">
              © {new Date().getFullYear()} Brisken Limited. All rights reserved.
            </Text>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
