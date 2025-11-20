'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Container,
  Group,
  Burger,
  Drawer,
  Stack,
  Text,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Explore', href: '#opportunities' },
  { label: 'Nutrition', href: '#nutrition' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
];

export function NavigationHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box
      h={80}
      style={{
        borderBottom: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 2000,
        backgroundColor: 'white',
      }}
    >
      <Container size="lg" h="100%">
        <Group justify="space-between" align="center" h="100%">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Group gap={8}>
                <Text fw={700} size="lg" style={{ color: '#ffa500' }}>
                  Brisken Ltd
                </Text>
              </Group>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <Group gap={30} visibleFrom="sm">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ color: '#ffa500', scale: 1.05 }}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </Group>

          {/* Mobile Navigation */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
          <Drawer
            opened={opened}
            onClose={close}
            padding="md"
            size="100%"
            position="right"
            zIndex={4000}
          >
            <Stack gap="md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </Stack>
          </Drawer>
        </Group>
      </Container>
    </Box>
  );
}
