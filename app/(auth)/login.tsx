import { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { Mail, Lock, Rocket } from 'lucide-react-native';
import { supabase } from '@/utils/supabase';

export default function LoginScreen() {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      if (!isMounted.current) return;
      setLoading(true);
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (isMounted.current) {
        router.replace('/(tabs)');
      }
    } catch (error) {
      if (isMounted.current) {
        Alert.alert('Error', error.message);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }
    ]}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Rocket
            size={48}
            color={isDarkMode ? '#ffffff' : '#000000'}
            style={styles.logo}
          />
        </View>
        <Text style={[
          styles.title,
          { color: isDarkMode ? '#ffffff' : '#000000' }
        ]}>
          Welcome Back
        </Text>
        <Text style={[
          styles.subtitle,
          { color: isDarkMode ? '#bbbbbb' : '#666666' }
        ]}>
          Sign in to continue managing your social media presence
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Mail
            size={20}
            color={isDarkMode ? '#bbbbbb' : '#666666'}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
                color: isDarkMode ? '#ffffff' : '#000000'
              }
            ]}
            placeholder="Email"
            placeholderTextColor={isDarkMode ? '#888888' : '#999999'}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            editable={!loading}
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock
            size={20}
            color={isDarkMode ? '#bbbbbb' : '#666666'}
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
                color: isDarkMode ? '#ffffff' : '#000000'
              }
            ]}
            placeholder="Password"
            placeholderTextColor={isDarkMode ? '#888888' : '#999999'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            editable={!loading}
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={[
            styles.forgotPasswordText,
            { color: isDarkMode ? '#bbbbbb' : '#666666' }
          ]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.button,
            { opacity: (!email || !password || loading) ? 0.5 : 1 }
          ]}
          onPress={handleLogin}
          disabled={!email || !password || loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={{ color: isDarkMode ? '#bbbbbb' : '#666666' }}>
            Don't have an account?
          </Text>
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text style={[styles.signupText, { color: '#ffffff' }]}> Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    transform: [{ rotate: '45deg' }],
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    top: 14,
    zIndex: 1,
  },
  input: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 48,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#000000',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    fontWeight: '600',
  },
});